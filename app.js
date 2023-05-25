require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./src/routes");
const expressUtils = require("./src/utils/express.utils");
const port = expressUtils.normalizePort(process.env.PORT || "3000");

const cors = require("cors");
const corsOptions = {
  origin: "*",
};

const database = require("./config/db.config");

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
