const express = require('express');

const app = express();
const port = 1245;

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let response = 'This is the list of our students\n';
  countStudents(FILE)
    .then((report) => {
      response += report;
      res.send(response);
    })
    .catch((err) => {
      response += (err instanceof Error ? err.message : err.toString());
      res.send(response);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
