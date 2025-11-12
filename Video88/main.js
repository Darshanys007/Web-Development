// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;

// // app.use(express.static('public'))

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World23\n');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello World123')
})

// app.get('/contact',(req,res)=>{
//     res.send('hello contact me')
// })
// app.get('/about',(req,res)=>{
//     res.send('About us')
// })
// app.get('/blog',(req,res)=>{
//     res.send('hello I am Blogger')
// })

app.listen(port,()=>{
    console.log(`Express app listenting on port ${port}`)
})