const express = require('express');
const app = express();

app.get('/greet',(req,res)=>{
    const name = req.query.name;
    if(!name) return res.send('Hello, Guest')
    res.send(`Hello, ${name}`);
})

app.listen(3000)