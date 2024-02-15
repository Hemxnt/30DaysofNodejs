const express = require('express')
const jwt = require('jsonwebtoken')
const app = express() 
const secret = 'day11'

const user = {
    username: 'admin',
    password: 'admin'
}

console.log('token:',jwt.sign(user,secret))
function authenticationMiddleware(req, res, next) {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).send('Unauthorized')
    }
    try {
        const decoded = jwt.verify(token, secret)
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).send('Unauthorized')
    }
}

const protected = (req, res) => {
    res.status(200).json({ message: 'User Authorized', user: req.user });
};

app.get('/protected', authenticationMiddleware, protected);

app.listen(3000)