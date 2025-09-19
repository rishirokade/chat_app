const express = require("express");
const app = express();

app.get("/test", (req, resp) => {
    console.log("get request");
    resp.status(200).json({
        status: "success",
        data: 100,
    });
});

app.listen(3000, () => {
    console.log("started on port 3000");
});
