const express = require('express');
app = express();
const hotelRoute = require('./Routes/hotelRoute');
app.listen(3000);
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/hotel', hotelRoute);
