const readDB = require('../utils');

const FILE = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    let result = 'This is the list of our students\n';
    const ccmp = (a, b) => {
      if (a[0].toLowerCase() < b[0].toLowerCase()) {
        return -1;
      }
      if (a[0].toLowerCase() > b[0].toLowerCase()) {
        return 1;
      }
      return 0;
    };
    readDB(FILE)
      .then((report) => {
        let count = 0;
        Object.values(report).forEach((el) => {
          count += el.length;
        });
        result += `Number of students: ${count}\n`;
        Object.keys(report).forEach((ky) => {
          result += `Number of students in ${ky}: ${report[ky].length}. List: ${report[ky].sort(ccmp).join(', ')}\n`;
        });
        response.status(200).send(result);
      })
      .catch((err) => {
        const msg = (err instanceof Error ? err.message : err.toString());
        response.status(500).send(msg);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const MAJORS = ['CS', 'SWE'];
    console.log(major);
    if (!MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDB(FILE)
      .then((report) => {
        const re = `List: ${report[major].join(', ')}`;
        response.status(200).send(re);
      })
      .catch((err) => {
        const msg = (err instanceof Error ? err.message : err.toString());
        response.status(500).send(msg);
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
