const mongoose = require('mongoose')

const connection = async ()=>{
 try{

    
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)

    if(connectionInstance)
    {
        console.log(`connection successfull...`);
    }
 }catch(err)
 {
    console.log('connection error :',err);
    throw err ;
 }
}

module.exports = connection ;