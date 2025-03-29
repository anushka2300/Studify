const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const authRoute=require('./routes/auth')
const uploadFile=require('./routes/fileUpload')
const contactus=require('./routes/contact')
app.use("/files",express.static("files"));
4
const PORT =process.env.PORT || 8000;
require('./db')

app.use(bodyParser.json());
app.use(cors({
    origin: ['https://startling-tiramisu-b59a6a.netlify.app', 'http://localhost:5174'],
    credentials: true
}));



app.use('/auth',authRoute)
app.use('/uploadfiles',uploadFile);
app.use('/contact',contactus)
app.listen(PORT, ()=>{
    console.log("server is running")
})

