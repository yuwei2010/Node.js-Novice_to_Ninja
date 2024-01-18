const http = require('http');
console.log("Hello, world!");

// Import required modules
// Create a server
const server = http.createServer((req, res) => {
    // Set the response header
    res.setHeader('Content-Type', 'text/plain');

    // Send a response
    res.end('Hello, world!');
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});




