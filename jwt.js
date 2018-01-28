const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

const secretKey = "12345jhgdsxcg2qw4";

//encode
jwt.sign({ _id: "23trfcvsdq4edxe2" }, secretKey, { expiresIn: 60 * 60 }, (err, token) => {
    if (err) throw new Error("errrr")
    console.log(`-----token is: ${token}`)
})


//decode
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyM3RyZmN2c2RxNGVkeGUyIiwiaWF0IjoxNTE3MTIxMDY5LCJleHAiOjE1MTcxMjQ2Njl9.9Ss25xSxYJWCI5-cFF6YJjqyxy5n2z9ksI4t0HHW5BU'

jwt.verify(token, secretKey, (err, decode) => {
    if (err) throw Error("errrr")
    console.log(`-----------Value of token ${token} is ${decode._id}`)
})

//decode by decoded = jwt.decode(token);
var decoded = jwt.decode(token, { complete: true });
console.log(decoded.header);
console.log(decoded.payload)

app.listen(3000, () => console.log("server start 3000"))