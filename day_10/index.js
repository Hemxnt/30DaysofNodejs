const express = require('express')
const path = require('path');
const app = express()

app.use(express.static('public'));

function staticFileServer(req, res) {
    if (req.url === '/') res.sendFile(path.join(__dirname, 'public', 'index.html'));
    else res.sendFile(path.join(__dirname, 'public', 'style.css'));
}

app.get('/', staticFileServer);
app.get('/public/style.css', staticFileServer);

app.listen(6000)
