const Router = require("express").Router();

Router.get("/", async (req, res) => {
    res.render("about");
})

module.exports = Router;