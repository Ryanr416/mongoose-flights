const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    } ,
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },

    flightNo: {
        type: Number,
        max: 9999,
        min: 10
    },

    departs: {
        type: Date,
        default: function() {
            return new Date().getFullYear();
        }

    }
})

module.exports = mongoose.model('flight', flightSchema)

module.exports = {
    getAll
}

function getAll() {
    return flightSchema;
  }
  