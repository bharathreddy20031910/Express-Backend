let express=require("express")
let cors = require('cors');
const Route = require('./Controllers/Route.js');
const ProductRoute = require('./Controllers/Productroute.js');
const mongoose = require('mongoose');   
require('dotenv').config();
const TutorRoute = require('./Controllers/TutorRoute.js');
const StudentRoute = require('./Controllers/StudentRoute.js');


let app=express();
app.use(cors());    
app.use(express.json())


app.use("/", Route);
app.use("/product", ProductRoute);
app.use("/tutorsignup", TutorRoute);
app.use("/studentsignup", StudentRoute);


app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
});