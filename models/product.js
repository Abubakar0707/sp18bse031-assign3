var mongoose = require("mongoose");
var productschema = mongoose.Schema({
    name:String,
    price:Number,
    pid:Number,
});
const productmodel = mongoose.model("products",productschema);

module.exports=productmodel;