const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer();
const FILE = process.argv[2];
const fs = require('fs').promises;

function countStudents(fil) {
  return new Promise((resolve, reject) => {
    fs.readFile(fil, 'utf-8')
      .then((data) => {
        const result = [];
        const fields = data.split('\n').filter(Boolean);
        fields.shift();
        const students = {};
        fields.forEach((line) => {
          const curr = line.split(',').filter(Boolean);
          const fi = curr[3];
          if (Object.keys(students).includes(fi)) {
            students[fi].push(curr[0]);
          } else {
            students[fi] = [curr[0]];
          }
        });
        result.push(`Number of students: ${fields.length}`);
        Object.keys(students).forEach((key) => {
          result.push(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}`);
        });
        resolve(result.join('\n'));
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const ROUTES = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];
app.on('request', (req, res) => {
  for (const routeHandler of ROUTES) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server listening at -> http://${hostname}:${port}\n`);
});
module.exports = app;
