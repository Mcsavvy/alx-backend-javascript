const fs = require('fs').promises;

function countStudents(fil) {
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
        console.log(`Number of students: ${fields.length}`);
        Object.keys(students).forEach((key) => {
          console.log(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}`);
        });
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}
module.exports = countStudents;
