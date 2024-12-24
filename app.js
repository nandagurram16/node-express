import express from 'express'
import dotenv from 'dotenv'
import userroter from './config/routes/userroter.js'
import chalk from 'chalk'
let app = express()
//load the env - values like post,host,dbinfo,secretkey
dotenv.config({'path':"./config/dev.env"})
let port = process.env.PORT 
let host=process.env.HOST_NAME 

//API URL : http://127.0.0.1:8082/
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Root Req"})
})

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log((chalk.bg)`Server Running: http://${host}:${port}/`)
})