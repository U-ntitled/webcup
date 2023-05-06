const mongoose = require('mongoose');
const {Schema} = mongoose

const UserSchema = Schema(
    {
        first_name : {
            type: String, require: true
        },
        last_name : {
            type: String, require: true
        },
        email: {
            type: String, require: true, unique: true
        },
        password: {
            type: String, require: true
        }
    },
    
    {
        timestamps : true
    }
)

module.exports = mongoose.model('user',UserSchema)