const mongoose = require("mongoose")
const DB ="mongodb+srv://avainpatel06:Avani0612@cluster2.mqtpc.mongodb.net/Laundry?retryWrites=true&w=majority&appName=Cluster2/Laundry"
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 }).then(()=>{
    console.log("connection established")
}).catch(err=>{
    console.log(err)})

