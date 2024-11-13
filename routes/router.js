const authRouter = require('./authRoute');
const cartRouter =  require('./cartRoute');
const producRouter = require('./productRoute')
const userRouter =  require('./userRouter');
const orderRouter = require('./orderRoute')
const express = require('express');
const app = express();

app.use("/auth",authRouter)
app.use("/users",userRouter)
app.use("/products",producRouter)
app.use("/cart",cartRouter)
app.use("/orders",orderRouter)

module.exports = app;