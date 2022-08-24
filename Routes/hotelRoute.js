const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hotelRoute = express.Router();
const hotelModel = require('../models/hotelModel');
app.use(bodyParser.json())

hotelRoute
    .route('/')
    .get(getHotel)
    .post(postHotel)
    .patch(updateHotel)
    .delete(deleteHotel)

async function getHotel(req, res) {
    let hotels = await hotelModel.find();
    res.json({
        message: "Welcome to Hotel App",
        hotels: hotels,
    })
};

async function postHotel(req, res) {
    try {
        let hotelDetails = req.body;
        let hotel = await hotelModel.create(hotelDetails);
        res.status(200).json({
            message: "Hotel created successfully",
            hotels: hotel,
        })
    } catch (error) {
        console.log(error);
    }
};

async function updateHotel(req, res) {
    let data = req.body;
    if (data.hotelID) {   
        let hotel = await hotelModel.findOneAndUpdate({ hotelID: data.hotelID }, { $set: data }, { new: true })
        console.log('updated!');
        res.status(200).json({
            message: "Hotel updated successfully",
            hotel: hotel,
        })
    }
}

async function deleteHotel(req, res) {
    let {hotelID} = req.body;
    let hotel = await hotelModel.findOneAndDelete(hotelID);
    res.status(200).json({
        message: 'Hotel has been deleted successfully',
        hotel: hotel
    })
}

module.exports = hotelRoute;