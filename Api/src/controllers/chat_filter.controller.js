const User = require('../models/user.model')
const Chat = require('../models/chat.model')


/**
 * In this controller, we filter the user chat by the chat "theme"
 * wich will be usefull to retrieve a chat which occur a long time ago
 * or just to retrieve a specific chat.
 * This can be possible by querying the database using a similar clause like
 * "LIKE" in MYSQL syntaxe with MongoDB ORM "mongoose" which will be used in this controller .
 */
exports.filter_by_theme = (request, response) => {

    const user_id = request.cookies.user;
    const user_input = request.body.user_input

    /**
     * Here find all chat from the database which owner is the current authenticate user 
     * And we specify the input that which be use to find the chat identified by a theme
     * The option "i" here is to specify that the search is case-insensitive
     */
    Chat.find({$and : [{owner : user_id}, {theme : { $regex : user_input, $options : "i" }}]})
    .then((result) => {
        status_code = (result.length > 0) ? 200 : 404

        // We rerturn the result
        response.status(status_code)
        .json(result)
    })
}

/**
 * In this controller, we retrieve the user's chat at specific date.
 */
exports.filter_by_date = (request, response) => {

    const user_id = request.cookies.user
    const date_inserted  = request.body.date_input

    date_inserted = new Date(date_inserted)

    Chat.find({ $and: [{owner: user_id}, {createdAt: date_inserted}]})
    .then((result) => {
        status_code = (result.length > 0) ? 200 : 404

        response.status(status_code)
        .json(result)
    })
}


/**
 * In this controller, we retrieve the user's chat between two dates
 */
exports.filter_between_date = (request, response) => {

    const user_id = request.cookies.user
    const {date1, date2}  = request.body

    date1 = new Date(date1)
    date2 = new Date(date2)

    Chat.find({ $and : [{owner : user_id}, {createdAt: {$gte : date1, $lt : date2}}]})
    .then((result) => {
        status_code = (result.length > 0) ? 200 : 404

        response.status(status_code)
        .json(result)
    })
}
