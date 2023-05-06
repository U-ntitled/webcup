const route = require('express').Router()

const filterController = require('../controllers/chat_filter.controller')


route.post('/bytheme', filterController.filter_by_theme)
route.post('/bydate', filterController.filter_by_date)
route.post('/between', filterController.filter_between_date)

module.exports = route