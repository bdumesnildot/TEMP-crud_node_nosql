const mongoose = require("mongoose");

const DB_MONGODB_NAME = process.env.DB_MONGODB_NAME;
const DB_MONGODB_PASSWORD = process.env.DB_MONGODB_PASSWORD;

const database = mongoose
  .connect(
    `mongodb+srv://${DB_MONGODB_NAME}:${DB_MONGODB_PASSWORD}@cluster0.ebzwsk2.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

module.exports = database;