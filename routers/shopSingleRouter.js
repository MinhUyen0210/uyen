const Router = require("express").Router();

Router.get("/shopSingle", async (req, res) => {
    res.render("shop-single", {css1: "css/aos.css", css2: "css/style.css"});
})

module.exports = Router;