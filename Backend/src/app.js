const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./database/db.js")
const authRoute = require("./routes/authRoute.js")

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use("/api/auth", authRoute)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})