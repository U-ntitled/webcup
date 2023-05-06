const mongoose = require('mongoose');
const {Schema} = mongoose

const ChatSchema = Schema(
    {
        theme : {
            type: String, require: true
        },

        messages : [{
            author : { type : String},
            text : { type : String}
        }],

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