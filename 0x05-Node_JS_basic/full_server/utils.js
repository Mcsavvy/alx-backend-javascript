const fs = require('fs').promises;

function readDatabase(fil) {
  return new Promise((resolve, reject) => {
    fs.readFile(fil, 'utf-8')
      .then((data) => {
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
        resolve(students);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

export default readDatabase;
module.exports = readDatabase;
