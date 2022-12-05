const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statsSchema = new Schema(
    {
        height: {type: Number, required: true},
        weight: {type: Number, required: true},
    },
    {
        timestamps: true,   
    }
);

const Stat = mongoose.model('stats', statsSchema);

module.exports = Stat;