const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        receiver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat",
        },
        content: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
const MessageModule = mongoose.model("Message", messageSchema);
module.exports = MessageModule;
