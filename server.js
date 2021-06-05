const express = require("express");

const routes = require("./routes");

const sequelize = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const init = async () => {
  try {
    await sequelize.sync();

    // sync sequelize models to the database, then turn on the server
    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("failed to connect to db");
  }
};

init();
