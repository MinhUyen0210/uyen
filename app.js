const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

let app = express();

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

let port = 6061;
app.listen(port, err => {
  if (err) console.log("err app listen: ", err);
  console.log(`App listen at ${port}`);
});

const aboutRouter = require("./routers/aboutRouter");
const cartRouter = require("./routers/cartRouter");
const checkoutRouter = require("./routers/checkoutRouter");
const contactRouter = require("./routers/contactRouter");
const indexRouter = require("./routers/indexRouter");
const shopRouter = require("./routers/shopRouter");
const shopSingleRouter = require("./routers/shopSingleRouter");
const thankyouRouter = require("./routers/thankyouRouter");
const testRouter = require("./routers/testRouter");
const loginRouter = require("./routers/loginRouter");
const registerRouter = require("./routers/registerRouter");


app.use("/", aboutRouter);
app.use("/", cartRouter);
app.use("/", checkoutRouter);
app.use("/", contactRouter);
app.use("/", indexRouter);
app.use("/", shopRouter);
app.use("/", shopSingleRouter);
app.use("/", thankyouRouter);
app.use("/", testRouter);
app.use("/", loginRouter);
app.use("/", registerRouter);





 

