const route = require('express').Router()
const chatController = require('../controllers/chat.controller.js')

route.get('/all', chatController.allChat)
route.get('/specific', chatController.specific)
        
route.put('/change', chatController.modify)
route.delete('/delete', chatController.delete)

route.post('/create_chat', chatController.createChat)
route.post('/new_message', chatController.newMess)

route.post('/chatgpt_api', chatController.chatgpt)

module.exports = route