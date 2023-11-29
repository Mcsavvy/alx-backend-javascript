export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      const departments = Object.values(report.allEmployees);
      for (const department of departments) {
        for (const employee of department) {
          yield employee;
        }
      }
    },
  };
}
