let express=require("express")
const app=express();
require('dotenv').config();
const JWT = require('jsonwebtoken');


let myToken=process.env.MY_TOKEN

let CheckToken=(req,res,next)=>{
    if (req.query.token=="" || req.query.token==undefined){
        return res.send({
            status:23,
            msg:"please fill the token"
        })
    }

    if (req.query.token!=myToken){
        return res.send(
            {
                status:200  ,
                msg:"enter correct token"
            }
        )
    }
    next();
}

app.use(CheckToken)
module.exports=CheckToken;