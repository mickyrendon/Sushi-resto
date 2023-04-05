const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Obtener la ruta del archivo solicitado
  const filePath = path.join(__dirname, 'src', req.url === '/' ? 'index.html' : req.url);

  // Verificar si el archivo existe
  fs.exists(filePath, (exists) => {
    if (exists) {
      // Leer el archivo y enviar su contenido como respuesta
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error interno del servidor');
        } else {
          // Configurar la cabecera HTTP
          const ext = path.parse(filePath).ext;
          const contentType = contentTypeMap[ext] || 'application/octet-stream';
          res.writeHead(200, { 'Content-Type': contentType });

          // Enviar el archivo como respuesta
          res.end(data);
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    }
  });
});

server.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

// Configurar el tipo MIME para cada tipo de archivo
const contentTypeMap = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
};
