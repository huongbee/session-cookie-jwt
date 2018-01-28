const express = require('express');
const session = require('express-session');

const app = express();
app.use(session({
    secret: 'key ssssscxchbdsfbjsdj',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 }
}))

app.get('/set-session', (req, res) => {
    //set session
    req.session.username = "huong";
    res.send('Session created')
})


app.get('/get-session', (req, res) => {
    //get cookie
    //console.log(req.session.username)
    if (req.session.username == undefined)
        return res.send('Session not yet setup!')
    res.send(`Session value is: ${req.session.username}`)
})
const port = process.env.port || 8000
app.listen(port, () => { console.log(`Server start on port ${port}`) })
