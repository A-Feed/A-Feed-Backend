const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const db = require("./config/database");
// const User = require("./models/usermodel");
const router = require("./routes/index");
const app = express();
dotenv.config();

async function startServer() {
  try {
    await db.authenticate();
    console.log("Database Connected...");
    // await User.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

app.use(express.json());
app.use(cookieParser());
app.use(router);

startServer();
app.listen(5000, () => console.log("A-Feed server running at port 5000"));
