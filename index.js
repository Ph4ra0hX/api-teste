const express = require("express");
const app = express();
var path = require("path");

const port = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/aviso.html"));
});

app.listen(port || process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
