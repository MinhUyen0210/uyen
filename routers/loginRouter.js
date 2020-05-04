const Router = require("express").Router();
const fs = require("fs");
const { createData, readData } = require("../controllers/dataController");

Router.get("/login", async (req, res) => {
  // let read = await readData("dataUser.json");
  // console.log(read);
  res.render("login", { css1: "css/aos.css", css2: "css/login.css" });
});

Router.post("/login", async (req, res) => {
  let newUserName = req.body.uname;
  let newPassword = req.body.psw;

  await createData("dataUser.json", newUserName, newPassword);
  res.render("login", { css1: "css/aos.css", css2: "css/login.css" });
});
module.exports = Router;



