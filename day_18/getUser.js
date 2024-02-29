const express = require('express')
const mongoose = require('mongoose')
const users = require('./users')
const app = express()

mongoose.connect('mongodb://localhost:27017/userDB', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

async function getAllUser(req, res) {
    try {
    const user = await users.find({}).exec();
    res.json(user);
    } catch (err) {
        res.send('Error: ', err);
    }
}
app.get('/', (req, res) => {
    res.send('day_18');
});
app.get('/users', getAllUser);

app.listen(3000)

