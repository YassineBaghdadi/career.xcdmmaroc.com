const express = require("express");
const session = require("express-session");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

app.use("/", require("./home"));
app.use("/Offer", require("./ofr"));
app.use("/Profile", require("./prfl"));
app.use("/Login", require("./login"));

app.get(/^.*\.html$/, (req, res) => {
  res.redirect(301, "/");
});

app.get(/^.*\.js$/, (req, res) => {
  res.redirect(301, "/");
});
app.use(function (req, res) {
  // res.redirect(301, '/');
  res.json({
    error: {
      name: "Error",
      status: 404,
      message: "Invalid Request",
      statusCode: 404,
    },
    message: "wrong url",
  });
});

app.listen(process.env.PRT);
