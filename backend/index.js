const express = require("express");
const app = express();

const mongoose = require("mongoose");
require('dotenv').config()

const port = process.env.PORT || 5000;

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use("/", (req, res) => {
        res.send("Book server is Running!");
    });
}

// 49bpweRJ3vNyonGb

main()
  .then(() => console.log("MongoDb Connect Successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Your app listen port:", port);
});
