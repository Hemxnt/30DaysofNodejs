const express = require('express')
const limiter = require('express-rate-limit')
const app = express()

const rateLimitMiddleware = limiter({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 2, // limit each IP to 2 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

app.use(rateLimitMiddleware)

app.get('/',(req,res) => res.send('HOME'))

app.listen(3000)