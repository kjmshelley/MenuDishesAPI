const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api/menu", (req, res) => {
    res.contentType("json");
    res.status(200).json([
        { id: 1, type: "main", dish: "Hamburger", price: 15.99, img: "burger.jpeg" },
        { id: 2, type: "main", dish: "Chicken Fingers", price: 12.99, img: "chicken_fingers.jpeg" },
        { id: 3, type: "main", dish: "Pasta", price: 13.00, img: "pasta.jpeg" },
        { id: 4, type: "main", dish: "Parmeasan Pasta", price: 13.69, img: "pasta_parmesan.jpeg" },
        { id: 5, type: "main", dish: "White Pasta", price: 15.21, img: "paste_white.jpeg" },
        { id: 6, type: "main", dish: "Steak", price: 32.51, img: "steak.jpeg" },
        { id: 7, type: "salad", dish: "Salad", price: 9.99, img: "salad.jpeg" },
        { id: 8, type: "salad", dish: "Caesar Salad", price: 13.50, img: "salad_caesar.jpeg" },
        { id: 9, type: "salad", dish: "Vegetable Salad", price: 10.99, img: "salad_vegetable.jpeg" },
        { id: 10, type: "soup", dish: "Lentil Soup", price: 2.00, img: "soup_lentil.jpeg" },
        { id: 11, type: "soup", dish: "Pumpkin Soup", price: 9.82, img: "soup_pumpkin.jpeg" },
        { id: 12, type: "soup", dish: "Tomato Soup", price: 5.99, img: "soup_tomato.jpeg" },
        { id: 13, type: "soup", dish: "Wanton Soup", price: 6.99, img: "soup_wanton.jpeg" },
        { id: 14, type: "dessert", dish: "Carrot Cake", price: 12.59, img: "dessert_carrot_cake.jpeg" },
        { id: 15, type: "dessert", dish: "Chocolate Cake", price: 16.00, img: "dessert_cake.jpeg" },
        { id: 16, type: "dessert", dish: "Chocolate Brownies", price: 13.50, img: "dessert_brownie.jpeg" },
        { id: 17, type: "dessert", dish: "Cookies", price: 7.52, img: "dessert_cookies.jpeg" },
    ]);
});

app.listen(port, () => console.log(`Server running on port ${port}!`));