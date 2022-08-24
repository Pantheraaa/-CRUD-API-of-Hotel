const express = require('express');
app = express();
const hotelRoute = require('./Routes/hotelRoute');
app.listen(3000);
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/hotel', hotelRoute);

// app.post('/', (req, res) => {
//     console.log('Post called');
//     let hotel = req.body;
//     console.log(hotel);
//     res.json({
//         message: "List of hotels",
//         user: hotel,
//     })
// })
