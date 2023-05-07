const mongoose = require('mongoose');
const {Schema} = mongoose

const UserSchema = Schema(
    {
        fname : {
            type: String, require: true
        },
        lname : {
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