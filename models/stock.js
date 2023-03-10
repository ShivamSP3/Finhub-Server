const mongoose = require('mongoose');
const stockSchema = mongoose.Schema({
    stockName:{
        type : String,
        required:true,
    },
    userId:{
        type : String,
    },
    qty:{
        type : Number,
        required:true,
    },
    buyPrice:{
        type : Number,
        required:true,
    }, 
    sellPrice:{
        type : Number,
        default: 0
    }, 
    
});
const Stocks = mongoose.model('Stocks',stockSchema);
module.exports = {Stocks,stockSchema};