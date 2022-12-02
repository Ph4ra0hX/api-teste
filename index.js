const express = require("express");
const app = express();

const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(port || process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
