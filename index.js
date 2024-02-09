const http = require('http');
 
const server = http.createServer((req, res) => {
  const serverIp = req.socket.remoteAddress; // Отримання IP-адреси сервера
 
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IP адреса сервера</title>
</head>
<body>
<h1>Ваша IP адреса: ${req.socket.remoteAddress}</h1>
<h2>IP адреса сервера: ${serverIp}</h2>
</body>
</html>
    `);
});
 
server.listen(8080, () => {
  console.log('** Сервер запущен на порту 8080 **');
});
