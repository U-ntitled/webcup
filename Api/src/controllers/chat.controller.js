const user = require('../models/user.model')
const chat = require('../models/chat.model')


exports.allChat = (req, res) =>  {

    const userId = req.cookies.user
    if(userId == ''){
        res
        .status(403)
        .json({error: "Forbidden"})

    }
    chat.find({owner: userId}).then(
        (result) => {
            res
            .status(200)
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

exports.createChat = (req, res) => {

    const userId = req.cookies.user
    const { theme, user_text, bot_text } = req.body

    if(theme != '' && user_text != '' && bot_text != '')
    {
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

exports.modify = (req, res) => {
    const userId = req.cookies.user
    const {theme, idChat} = req.body

    if(userId == ''){
        res
        .status(401)
        .json({err: 'Forbidden'})
    }

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
            .status(401)
            .json({mess: error})
        }
    )
}

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