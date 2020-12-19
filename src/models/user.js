const mongoose = require('mongoose');

const user = mongoose.Schema({
    name: { type: String, unique: true },
    points: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('User', user);