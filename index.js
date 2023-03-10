const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static("./assets"));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// use express router
app.use("/", require("./routes/index"));

// setup the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }
  console.log(`Server is up and running on port ${PORT}`);
});
