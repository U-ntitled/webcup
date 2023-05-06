const user = require('../models/user.model')
const chat = require('../models/chat.model')


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
exports.createChat = (req, res) => {

    // Getting user ID and data from frontend
    const userId = req.cookies.user
    const { theme, user_text, bot_text } = req.body

    if(theme != '' && user_text != '' && bot_text != '')
    {
        // Create a chat for 
        const newChate = new chat({
            theme: theme,
            user_text: user_text,
            bot_text: bot_text,
            owner: userId
        })

        newChate.save()
        
        res
        .status(201)
        .end()
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