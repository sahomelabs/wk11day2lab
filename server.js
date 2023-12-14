// server.js 
const express = require('express');
const app = express();

app.get ('/', function (req,res) {
    res.send("Hello World");
});


//Mount Routes
app.get('/greeting', (req, res) => {
    res.send("Hello, stranger");
});

// 

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
// app port 3000 for listen to Http Request