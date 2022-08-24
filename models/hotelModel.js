const { strict } = require('assert');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const db_link = "Datebase(MongoDB Atlas) link enter here";

mongoose.connect(db_link)
    .then(function () {
        console.log('Atlas connected...');
    }).catch(function (err) {
        console.log(err);
    })

// hotel Schema:
const hotelSchema = mongoose.Schema({
    hotelID: {
        type: Number,
        default: function () {
            return Math.floor(Math.random() * 10000000);
        },
        index: {unique: true},
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        requied: true,
    },
    type: {
        type: String,
        enum: ['Hotel', 'Restaurant', 'Office', 'Launge', 'Resort', 'Spa', 'Villa'],
        default: 'Hotel',
    },
    GSTIN: {
        type: String,
        required: true,
        unique: true,
        min: 10
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    city: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false
    }
});

const hotelModel = mongoose.model("hotelModel", hotelSchema);

module.exports = hotelModel;