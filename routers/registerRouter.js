const Router = require("express").Router();
const fs = require("fs");
const { createData, readData } = require("../controllers/dataController");

Router.get("/register", async (req, res) => {
  let read = await readData("dataUser.json");
  console.log(read);
  res.render("register", { css1: "css/aos.css", css2: "css/register.css" });
});

Router.post("/register", async (req, res) => {
  let newUserName = req.body.uname;
  let newPassword = req.body.pwd;

  await createData("dataUser.json", newUserName, newPassword);
  res.render("register", { css1: "css/aos.css", css2: "css/register.css" });
});
module.exports = Router;
