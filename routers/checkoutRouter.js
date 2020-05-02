const Router = require("express").Router();

Router.get("/checkout", async (req, res) => {
    res.render("checkout", {css1: "css/aos.css", css2: "css/style.css"});
})

module.exports = Router;