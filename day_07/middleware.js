const express = require('express')
const app = express()

function requestLoggerMiddleware(req, res, next) {
    const timeStamp = new Date().toISOString()
    console.log(`[${timeStamp}] ${req.method} ${req.originalUrl}`)
}

app.use(requestLoggerMiddleware)

app.get('/', res => {
    res.send('Reload Me!');
});

app.listen(3000)