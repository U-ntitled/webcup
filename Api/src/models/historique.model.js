const mongoose = require('mongoose');
const {Schema} = mongoose

const HistorySchema = Schema(
    {

    }
)

module.exports = mongoose.model('history',HistorySchema)