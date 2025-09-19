const express = require("express");
const dotenv = require("dotenv");
const { data } = require("./data/chatData");
dotenv.config();
const app = express();

app.get("/api/chat/:id", (req, resp) => {
    const id = req.params.id;
    const chat = data.filter((item) => item._id === id);

    if (!chat || chat.length === 0) {
        console.log(chat, "chat");

        return resp.status(404).json({
            status: "error",
            message: "Chat not found",
        });
    }

    resp.status(200).json({
        status: "success",
        data: chat,
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("started on port " + PORT);
});
