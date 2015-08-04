var mongoose = require('mongoose');
var OrderItems = require('./orderitems');
var ObjectId = mongoose.Schema.ObjectId;


var orderSchema = new mongoose.Schema({
    owner: {type: ObjectId, ref: 'User'},
    vendor: String,
    created_on: Date,
    active: Boolean,
    orderItems: [OrderItems]
});

module.exports = mongoose.model('Order', orderSchema);