const express = require('express');
const app = express();
const port = 3000;

const cache = {}; // Object to store cached responses

function cachingMiddleware(req, res, next) {
    const { url } = req;
    const cachedResponse = cache[url];

    if (cachedResponse && Date.now() < cachedResponse.expirationTime) {
        // If cached response exists and not expired, return cached response
        res.send(cachedResponse.data);
    } else {
        // Store the response in cache
        const originalSend = res.send;
        res.send = (body) => {
            cache[url] = {
                data: body,
                expirationTime: Date.now() + (10 * 1000), // Cache expiration time (e.g., 10 seconds)
            };
            originalSend.call(res, body);
        };
        next();
    }
}

app.use(cachingMiddleware);

app.get('/data', (req, res) => {
    res.send('Hey there!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});