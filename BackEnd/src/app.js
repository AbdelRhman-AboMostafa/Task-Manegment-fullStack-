const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors({
     origin: "*",
}));
app.use(express.json());


app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is healthy" });
});

module.exports = app;