const mongoose= require("mongoose");
 
const appointmentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true,
        unique:true

    },
    message:{
        type:String 
    }
})

const Appointment= new mongoose.model("Appointment",appointmentSchema);

module.exports= Appointment;