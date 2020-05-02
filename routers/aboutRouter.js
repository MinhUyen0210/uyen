const Router = require("express").Router();
const fs = require("fs");

Router.get("/", async (req, res) => {
    res.render("about", {css1: "css/aos.css", css2: "css/style.css"});
})

module.exports = Router;