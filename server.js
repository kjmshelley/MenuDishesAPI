const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/menu", (req, res) => {
    res.contentType("json");
    res.status(200).json([
        { type: "main", dish: "hamburger", price: 11.99 }
    ]);
});

app.listen(port, () => console.log(`Server running on port ${port}!`));