const express = require('express')
const app = express()

function positiveIntegerHandler(req, res,next) {
    const number = parseInt(req.query.number, 10);
    if(number > 0){
        return res.send('Success: The input is a positive integer.');
    } else {
        const err = new Error('Invalid number. Please provide a positive integer.');
        err.status = 400;
        next(err);
    }
}

app.get('/positive', positiveIntegerHandler);

app.use((err, req, res, next) => {
    if (err.status === 400) {
        res.status(400).send(err.message);
    } 
    else {
        next(err);
    }
});

app.listen(3000)