const http = require('http');
const fs = require('fs');
const port = 8080;

const index_page = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Content from private-ip.txt</title>
  <style>
    /* Add CSS styles as needed */
  </style>
</head>
<body>
  <h1>Content from private-ip.txt:</h1>
  <p id="ip-address"></p>
  <script>
    async function displayPrivateIp() {
      try {
        // Ensure correct path to your file (update if necessary)
        const response = await fetch('/var/www/html/private-ip.txt');
        if (!response.ok) {
          throw new Error('Error fetching private-ip.txt: ' + response.statusText);
        }
        const privateIp = await response.text();
        document.getElementById('ip-address').textContent = privateIp;
      } catch (error) {
        console.error('Error:', error);
        // Handle errors gracefully, e.g., display a user-friendly message
      }
    }
    displayPrivateIp();
  </script>
</body>
</html>
`;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  response.end(index_page);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(`Server listening on port ${port}`);
});
