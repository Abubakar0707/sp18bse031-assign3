const mongoose = require('mongoose');

const URI='mongodb+srv://abubakar0707:freakspy007@products.a7dyk.mongodb.net/Products?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;