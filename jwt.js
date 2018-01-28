
const jwt = require('jsonwebtoken')
const secretKey = "12345jhgdsxcg2qw4";

// //encode
// jwt.sign({ _id: "23trfcvsdq4edxe2" }, secretKey, { expiresIn: 60 * 60 }, (err, token) => {
//     if (err) throw new Error("errrr")
//     console.log(`-----token is: ${token}`)
// })

// //decode
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyM3RyZmN2c2RxNGVkeGUyIiwiaWF0IjoxNTE3MTIxMDY5LCJleHAiOjE1MTcxMjQ2Njl9.9Ss25xSxYJWCI5-cFF6YJjqyxy5n2z9ksI4t0HHW5BU'

// jwt.verify(token, secretKey, (err, decode) => {
//     if (err) throw Error("errrr")
//     console.log(`-----------Value of token ${token} is ${decode._id}`)
// })


// //decode by decoded = jwt.decode(token);
// var decoded = jwt.decode(token, { complete: true });
// console.log(decoded.header);
// console.log(decoded.payload)

function sign(obj) {
    return new Promise((resolve, reject) => {
        jwt.sign(obj, secretKey, { expiresIn: 60 * 60 }, (err, token) => {
            if (err) return reject(err)
            return resolve(token)
        })
    })
}
function verify(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) return reject(err)
            return resolve(decoded)
        })
    })
}

// sign({ id: "2345678kjhgfd" })
//     .then(token => {
//         verify(token).then(obj => {
//             console.log(obj.id)
//         })
//     })
//     .catch(err => { console.log(err.message) })
module.exports = { sign, verify }