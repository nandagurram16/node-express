

import bcrypt from 'bcrypt'

let user ={
    'email':'nanda@example.com',
    'cc':'123412345678',
    'cvv':'212'
}

let salt = bcrypt.genSaltSync(10);
let new_cc = bcrypt.hashSync(user.cc,salt)
console.log(user.cc)
console.log(new_cc)

