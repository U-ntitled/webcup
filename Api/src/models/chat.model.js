const mongoose = require('mongoose');
const {Schema} = mongoose

const ChatSchema = Schema(
    {
        theme : {
            type: String, require: true
        },

        user_text : {
            type: String, require: true
        },
        
        bot_text : {
            type: String, require: false
        },

        // User reference (Work like foreign key)
        owner : {
            type: Schema.Types.ObjectId, ref : "user"
        }
    },

    {
        timestamps : true
    }
)

module.exports = mongoose.model('chat',ChatSchema)