const user = require('../models/user.model')
const chat = require('../models/chat.model')
const dotenv = require('dotenv');

dotenv.config()

/**
 * We import open ai module and configure it to run the API
 */
const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);



/* 
    Getting all chat records of the authenticated user
*/
exports.allChat = (req, res) =>  {

    // Check if the user is not authenticate
    const userId = req.cookies.user
    if(userId == ''){
        res
        .status(403)
        .json({error: "Forbidden"})

    }

    // Getting all chat from DB
    chat.find({owner: userId}).then(
        (result) => {

            status_code = (result.length > 0) ? 200 : 404;

            res
            .status(status_code)
            .json(result)
        }
    ).catch(
        (err) => {
            res
            .status(400)
            .json({mess: err})
        }
    )

}


/* 
    Create a chat for an authenticated user
*/
exports.createChat = async (req, res) => {

    // Getting user ID and data from frontend
    const userId = req.cookies.user
    const { theme, user_text } = req.body
    let reponse = ""

    user_text = user_text + "\n\n Context : analyse de reve \n Relation du reve avec l'avenir."

    if(theme != '' && user_text != '')
    {

        /**
         * Here we send the prompt to the openai api and register back the data from it and 
         * send it back to the frontend app.
         */
        try {
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages:[{role : 'user' , content: user_text}],
            });
            reponse = completion.data.choices[0].message.content;
    
        } catch (error) {
            res.status(400)
            .json({
                error : true,
            })
        }


        // Create a chat for 
        const newChate = new chat({
            theme: theme,
            user_text: user_text,
            bot_text: reponse,
            owner: userId
        })

        newChate.save()
        
        res
        .status(201)
        .json({
            error: false,
            reponse : reponse
        })
    }
    else{
        res
        .status(400)
        .json({err: "Parametre introuvable"})
    }
    
}

/**
 * Controller wich modify the theme of a chat which already exist
 */
exports.modify = (req, res) => {

    // getting user ID and data from frontend
    const userId = req.cookies.user
    const {theme, idChat} = req.body

    if(userId == ''){
        res
        .status(401)
        .json({err: 'Forbidden'})
    }

    // Update the current chat theme by the user input 
    chat.updateOne(
        {_id: idChat},
        {
            theme: theme
        },
        {new: true}
    )
    .then(
        (result)=>{
            res
            .status(200)
            .json()
        }
    )
    .catch(
        (error) => {
            res
            .status(400)
            .json({mess: error})
        }
    )
}

/**
 * Controller which delete an existing chat
 */
exports.delete = (req, res) => {
    const userId = req.cookies.user
    const idChat = req.body

    if(userId == ''){
        res
        .status(401)
        .json({err: 'Forbidden'})
    }

    chat.deleteOne({_id: idChat})
    .then((result)=>{res.status(201).end()})
    .catch((err)=>{res.status(400).json({error: err})})
}


/**
 * ChatGPT API test
 */

exports.chatgpt = async (request, response) => {
    const prompt = request.body.prompt

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages:[{role : 'user' , content: prompt}],
        });
        console.log(completion.data.choices[0].message.content);

    } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
    }
}
