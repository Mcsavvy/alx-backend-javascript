/**
 *
 * @param {{
 *  id: number;
 *  firstName: string;
 *  location: string;
 * }[]} students
 * @param {string} location
 * @param {{
 *  studentId: number;
 *  grade: number;
 * }[]} newGrades
 * @returns
 */
export default function updateStudentGradeByCity(students, location, newGrades) {
  return students
    .filter((student) => student.location === location)
    .map((student) => {
      const data = { ...student, grade: 'N/A' };
      const newGrade = newGrades.find((grade) => (grade.studentId === student.id));
      if (newGrade !== undefined) {
        data.grade = newGrade.grade;
      }
      return data;
    });
}
