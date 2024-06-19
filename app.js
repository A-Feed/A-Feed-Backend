const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/database");
const Routes = require("./routes/user");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/users", Routes);

// Test database connection
db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log("Error: " + err));

// Sync database
db.sync()
    .then(() => console.log("Database synced"))
    .catch(err => console.log("Error: " + err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
