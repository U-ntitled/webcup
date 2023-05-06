const mongoose = require('mongoose');
const {Schema} = mongoose

const UserSchema = Schema(
    {

    }
)

module.exports = mongoose.model('user',UserSchema)