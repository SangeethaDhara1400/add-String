const app = require("./app.js");
app.get("/", (request, response) => {
  response.send("Express JS");
});
app.listen(3000);
