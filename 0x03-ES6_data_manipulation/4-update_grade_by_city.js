export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  // getListStudnets a list of students
  // city string to filter the data
  // newGrades Array of new grads as parameters for updating the list

  const filteredCity = getListStudents.filter((x) => x.location === city);

  const updatedStudents = filteredCity.map((student) => {
    const filteredGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
    let newStudent = { ...student, grade: 'N/A' };
    if (filteredGrade) {
      newStudent = { ...student, grade: filteredGrade.grade };
    }
    return newStudent;
  });
  return updatedStudents;
}
