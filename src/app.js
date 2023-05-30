
const express= require("express");
const app=express();
const path= require("path");
const bodyParser= require ("body-parser");
require("./db/conn");
const Appointment= require("./models/appointments");

const port= process.env.PORT|| 3000;

const static_path= path.join(__dirname,"../public");
app.use(express.json());
app.use(express.urlencoded({extended:false}));





app.use(express.static(static_path));

app.get("/", (req, res)=> {
    res.render("index");
});


app.post("/appointment",async (req,res) =>{
    try{
    const userAppointment = new Appointment({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        message:req.body.message
    })

   const appointed= userAppointment.save(); 
   res.status(201).render("index.html"); 

}catch(error){

    res.status(400).send(error);

}
   

})


app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
})