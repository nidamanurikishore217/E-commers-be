const express = require('express');
const bodyParser = require('body-parser')
const cors =require('cors');
const appRouter = require('./routes/router')
const app =express();
const Port = 3000

app.use(cors())
app.use(bodyParser.json())

app.use('/api', appRouter);

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});