import jwt from 'jsonwebtoken'

let payload = {
    'ename':'nanda kumar',
    'password':'car'
}

let token = jwt.sign(payload,'better luck next time')
console.log(token)

let new_payload = jwt.verify(token,'better luck next time')
console.log(new_payload)