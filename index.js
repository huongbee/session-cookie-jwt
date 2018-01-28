const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    //set cookie
    res.cookie('username', 'huonghuong')
    res.send('Cookie created')
})
app.get('/see', (req, res) => {
    //get cookie
    if (req.cookies.username == undefined) return res.send('Cookie not yet setup!')
    res.send(`Cookie value is: ${req.cookies.username}`)
})

const port = process.env.port || 8000
app.listen(port, () => { console.log(`Server start on port ${port}`) })