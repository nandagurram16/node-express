// import bcrypt from 'bcrypt'
// let user ={
//     email:"rahul@gmail.com",
//     password:'ILI',
//     CC:'123412341111222',
//     CVV:'123'
// }
// let salt= bcrypt.genSaltSync(10)
// let new_Psw=bcrypt.hashSync(user.password,salt)
// console.log(user.password)
// console.log(new_Psw)
// ===========================================
import bcrypt from 'bcrypt'
import e from 'express'
let user ={
    email:'anda@gmil.com',
    password:'ITL',
    cc:'123546857',
    cv:'456'
}
let salt = bcrypt.genSaltSync(10)
let new_Psw = bcrypt.hashSync(user.password,salt)
user = {...user,password:new_Psw}

let flag = bcrypt.compareSync('tink',user.password)
if (flag){
    console.log('login sucess')
}
else{
    console.log('login faied')
}