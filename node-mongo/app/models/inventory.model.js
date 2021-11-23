const moogoose = require('mongoose')

const InventorySchema = new moogoose.Schema({
    prodnmae: String,
    qty:Number,
    price: Number,
    status:String
});

module.exports = moogoose.model('Inventory', InventorySchema);