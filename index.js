const http = require('http');
const port = 8080;
const fs = require('fs');

const requestHandler = (request, response) => {
  console.log(request.url);
  
  if (request.url === '/') {
    fs.readFile('/home/ubuntu/private-ip.txt', 'utf-8', (error, privateIp) => {
      if (error) {
        console.error('Ошибка чтения private-ip.txt:', error);
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Internal Server Error');
        return;
      }
      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      response.end(`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>Hello World!</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                .container { min-height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center; }
                .title { font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif; display: block; font-weight: 300; font-size: 100px; color: #35495e; letter-spacing: 1px; }
                .subtitle { font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif; font-weight: 300; font-size: 42px; color: #526488; word-spacing: 5px; padding-bottom: 15px; }
                .links { padding-top: 15px; }
            </style>
          </head>
          <body>
            <section class="container">
              <div>
                <h1 class="title">
                👋 Hello World 🌍😀
                </h1>            
              </div>
            </section>
            <h1>Ваш IP-адрес:</h1>
            <p id="ip-address">${privateIp}</p>
          </body>
        </html>
      `);
    });
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Not Found');
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('😡 something bad happened', err);
  }
  console.log(`🌍 server is listening on ${port}`);
});
