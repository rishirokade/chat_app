const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
    {
        chatName: {
            type: String,
            trim: true,
        },
        isGroupChat: {
            type: Boolean,
            default: false,
        },
        groupAdmin: {
            type: mongoose.Schema.type.ObjectId,
            reference: "User",
        },
        latestMessage: {
            type: mongoose.Schema.type.ObjectId,
            reference: "Message",
        },
        users: [
            {
                type: mongoose.Schema.type.ObjectId,
                reference: "User",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const ChatModule = mongoose.module("Chat", chatSchema);
module.exports = ChatModule;
