const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>slash URL</title></head>');
        res.write(' <body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"> Send</button> </form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('content-type', 'text/html')
    res.write('<html>');
    res.write('<head><title>node app</title></head>');
    res.write(' <body><h1>Hello from the Node app</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'This is random text' 
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'This is random text';

exports.handler = requestHandler;
exports.someText = 'This is random text';