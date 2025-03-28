// Import the 'express' module
import express from "express";
import mongoose from "mongoose";
const cors = require("cors");
const path = require("path");

// Create an Express application
const app = express();
app.use(cors())

// Set the port number for the server
const port = 8000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/FIM");

// Define a route for API calls
app.use("/api", require("./routes/api.route"));

app.use(express.static(path.join(__dirname, "../../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});


// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
