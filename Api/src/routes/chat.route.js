const route = require('express').Router()
const chatController = require('../controllers/chat.controller')

route.get('/all', chatController.allChat)
route.post('/create', chatController.createChat)
route.put('/change', chatController.modify)
route.delete('/delete', chatController.delete)

module.exports = route