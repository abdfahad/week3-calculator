const express = require('express');
const logger = require('morgan');
const { calculator } = require('./routes/calculatorRoute');
const { logUrl } = require('./middleware/url');
const { logReqBody } = require('./middleware/reqBody');

const app = express();

app.use(logger('dev'));
app.use(express.text());
app.use(logUrl);
app.use(logReqBody);

app.use('/calculator', calculator);

app.listen(3344, ()=>{
    console.log("Server running and listening at port 3344");
})