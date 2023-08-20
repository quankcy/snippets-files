const express = require('express')
const path = require('path');
const app = express()
const port = 3003

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://snippets-ten.vercel.app"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('<html><body>Hello World!</body></html>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(function (req, res, next) {
    // var filename = path.basename(req.url);
    // var extension = path.extname(filename);
    // if (extension === '.css')
    console.log("The file " + req.url + " was requested.");
    next();
});
app.use(express.static('public'))