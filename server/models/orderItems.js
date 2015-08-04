var mongoose = require('mongoose');

var orderItemsSchema = new mongoose.Schema({
    itemNo: Number,
    itemDesc: String,
    itemPrice: Number,
    itemQuantity: Number
});

module.exports = mongoose.model('OrderItems', orderItemsSchema);