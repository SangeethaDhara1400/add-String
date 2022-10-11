const express = require("express");
const app = express();

const a = app.get("/", (request, response) => {
  response.send("Express JS");
});
module.exports = a;
app.listen(3000);
