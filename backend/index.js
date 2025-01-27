const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.use("/", (req, res) => {
  res.send("Book server is Running!");
});

app.listen(port, () => {
  console.log("Your app listen port:", port);
});
