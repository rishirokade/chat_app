const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        pic: {
            type: String,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

const userModule = mongoose.Module("User", userSchema);
module.exports = userModule;
