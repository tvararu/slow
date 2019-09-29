const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.listen(app.get("port"), () => {
  console.log("Node app is running at http://localhost:" + app.get("port"));
});
