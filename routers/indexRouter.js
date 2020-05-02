const Router = require("express").Router();

Router.get("/index", async (req, res) => {
    res.render("index", {css1: "css/aos.css", css2: "css/style.css"});
})

module.exports = Router;