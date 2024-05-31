const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Student = new Schema({
    stname: {type: String, default: '', maxLength: 255},
    course: {type: String, default: ''},
    fee: {type: Number, default: 0},
    isDeleted: {type: Boolean, default: false},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Student', Student);