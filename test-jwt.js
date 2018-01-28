
const express = require('express')
const cookieParser = require('cookie-parser')
const { sign, verify } = require('./jwt')

const app = express()
app.use(cookieParser())

app.get('/login', (req, res) => {
    sign({ id: '1234554321edcddd' })
        .then(token => {
            res.cookie.token = token
            res.send("Created token!")
        })
        .catch(err => res.send(err.message))
})

app.get('/home', (req, res) => {
    const { token } = res.cookie
    console.log(token)
    if (!token) return res.send('Token not yet setup')
    verify(token)
        .then(obj => {
            //const { id } = obj
            const id = obj.id
            console.log(id)
            if (id == '1234554321edcddd') return res.send('Login successfully')
            res.send('Cannot find user');
        })
        .catch(err => res.send(err.message))
})
app.listen(3000, () => console.log("server start 3000"))
