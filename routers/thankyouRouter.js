const Router = require("express").Router();

Router.get("/thankyou", async (req, res) => {
    res.render("thankyou", {css1: "css/aos.css", css2: "css/style.css"});
})

module.exports = Router;