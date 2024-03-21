function errorHandler(err, req, res, next) {
    // Log the error for debugging purposes
    console.error(err);

    // Set the status code based on the error type
    let statusCode;
    if (err instanceof SyntaxError) {
        statusCode = 400; // Bad Request
    } else if (err instanceof ReferenceError) {
        statusCode = 500; // Internal Server Error
    } else {
        statusCode = 500; // Internal Server Error
    }

    // Send an error response to the client
    res.status(statusCode).json({ error: err.message });
}

module.exports = errorHandler;
