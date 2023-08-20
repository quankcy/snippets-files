const express = require('express')
const morgan = require("morgan");
const fs = require('fs');
// const path = require('path');

const app = express()
const port = 3003

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "https://snippets-ten.vercel.app"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('<html><body>Hello World!</body></html>')
})

// app.get('/snippet?test=java/codingBat/warmup-1/Diff21Test.java', (req, res) => {
//     let readFileSync = fs.readFileSync('./public/java/codingBat/warmup-1/Diff21Test.java', 'utf-8');
//     // console.log(readFileSync)
//     res.set('Content-Type', 'text/plain')
//     res.send(readFileSync)
// })

// app.get('/java/codingBat/warmup-1/Diff21Test.java', (req, res) => {
//     let readFileSync = fs.readFileSync('./public/java/codingBat/warmup-1/Diff21Test.java', 'utf-8');
//     // console.log(readFileSync)
//     // // res.set('Content-Type', 'application/json')
//     res.json({'data': readFileSync})
//     // res.json({'data': "asd"})
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.use(function (req, res, next) {
//     // var filename = path.basename(req.url);
//     // var extension = path.extname(filename);
//     // if (extension === '.css')
//     res.set('Content-Type', 'text/plain')
//     console.log("The file " + req.url + " was requested.");
//     console.log("REQUEST-START")
//     console.log(req)
//     console.log("REQUEST-END")
//     console.log("RESPONSE-START")
//     console.log(res)
//     console.log("RESPONSE-END")
//     next();
// });
app.use('/snippet', express.static('snippet'))

app.get('/subdirs', (req, res) => {
    let readdirSync = fs.readdirSync(process.cwd());
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(readdirSync)
})

app.get('/process-cwd', (req, res) => {
    res.statusCode = 200;
    res.json(process.cwd());
})
