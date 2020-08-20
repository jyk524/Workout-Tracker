// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// PORT
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",{
    useNewUrlParser: true,
});

// routes
require("./routes/api-routes.js")(app);
require("./routes/api-routes.js")(app);

// 
app.listen(3000, () => {
    console.log("App running on port 3000!");
});

