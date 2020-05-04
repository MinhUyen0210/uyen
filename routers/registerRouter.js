const Router = require("express").Router();
const fs = require("fs");
const { createData, readData } = require("../controllers/dataController");

Router.get("/register", async (req, res) => {
  let read = await readData("dataUser.json");
  res.render("register", { css1: "css/aos.css", css2: "css/register.css" });
});

Router.post("/register", async (req, res) => {
  let rUserName = req.body.runame;
  let rPassword = req.body.rpsw;

  await createData("dataUser.json", rUserName, rPassword);
  res.render("register", { css1: "css/aos.css", css2: "css/register.css" });
});
module.exports = Router;

