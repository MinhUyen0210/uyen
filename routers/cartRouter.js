const Router = require("express").Router();
const fs = require("fs");
Router.get("/cart", async (req, res) => {
    res.render("cart", {css1: "css/aos.css", css2: "css/style.css"});
})

module.exports = Router;