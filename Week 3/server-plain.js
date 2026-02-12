// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    console.log(`Receieved request for ${req.url}`);
    if(req.url == '/'){
     res.writeHead(200, { 'Content-Type': 'text/plain' });
    }else if(req.url == `/about`){
         res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Welcome to the about Page!\n');

    }else if(req.url == `/f`){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome Pervert!\n');

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not found!\n');
    }



});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`