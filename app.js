const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const appRouter = require('./routes/router')
const initDb = require("./utils/mongodb")
const { swaggerUi, swaggerSpec } = require('./config/swagger');
const app = express();
const Port = 3000

initDb(() => {
  initServer();
});

//initi all appplication level libs
function initServer() {
  app.use(cors())
  app.use(bodyParser.json())
  // Swagger documentation route
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use('/api', appRouter);
  app.listen(Port, () => {
    console.log(`Server is running on at http://localhost:${Port}`);
  });
};
