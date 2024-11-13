require('dotenv').config();
const mongoose =require("mongoose")

module.exports = async (next)=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_URL).then(()=>{
            console.log("connected to database");
            next();
        })
    }
    catch(error){
        console.log("could not connected ")
    }
}