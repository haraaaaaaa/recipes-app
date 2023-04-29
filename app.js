// Requirements
const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/admin.routes");
const recipeRoutes = require("./routes/recipe.routes");
const errorControllers = require("./controllers/error-controllers");
const { connect } = require("./util/database");

// Server Setup
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routing
app.use(adminRoutes);
app.use(recipeRoutes);

app.get("*", errorControllers.get404);

// Connecting to DB
connect().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});
