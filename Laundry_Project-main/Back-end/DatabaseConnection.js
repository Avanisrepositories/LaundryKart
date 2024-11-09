const mongoose = require("mongoose")
const DB ="mongodb+srv://xvz:<db_password>@cluster2.mqtpc.mongodb.net/?retryWrites=true&w=majority&appName=Clusterxvz"
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 }).then(()=>{
    console.log("connection established")
}).catch(err=>{
    console.log(err)})

