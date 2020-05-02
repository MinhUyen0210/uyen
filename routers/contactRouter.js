const Router = require("express").Router();

Router.get("/contact", async (req, res) => {
    res.render("contact", {css1: "css/aos.css", css2: "css/style.css"});
})

module.exports = Router;