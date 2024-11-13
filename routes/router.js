const authRoute = require('./authRoute');
const producRoute = require('./productRoute')
const express = require('express');
const app = express();

app.use("/auth",authRoute)
app.use("/products",producRoute)

module.exports = app;