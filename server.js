import chalk from 'chalk'
import express from 'express'

const app=express()

app.get('/create',(req,resp)=>{
    resp.send('create my server for running')
})

app.get('/nanda',(req,resp)=>{
    resp.send('created get app')
})

app.listen(5000,(err)=>{
      if (err) throw err
      console.log(chalk.bgBlue(`server is running`))})