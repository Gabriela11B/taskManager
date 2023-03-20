require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express();

app.use(express.json());
app.use(cors());


const { PORT, HOST, MONGO_URI } = process.env;

const router = require("./routes/route.js")

app.use("/", router)




mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        (`DB connected and listening on ${HOST}:${[PORT]}`)
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });