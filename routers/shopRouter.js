const Router = require("express").Router();

Router.get("/shop", async (req, res) => {
    res.render("shop", {css1: "css/aos.css", css2: "css/style.css"});
})
Router.post("/shop", async (req, res) => {
    let newContent = req.body.content;
    await createData(newContent, "dataCart.json");
    console.log("post")
    res.render("shop", {css1: "css/aos.css", css2: "css/style.css"});
})
module.exports = Router;