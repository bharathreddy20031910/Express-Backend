let express=require("express")
let cors = require('cors');
const Route = require('./Controllers/Route.js');
require('dotenv').config();

let app=express();
app.use(cors());    
app.use(express.json())


app.use("/", Route);

app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
});