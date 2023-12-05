export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
    // getListStudnets a list of students
    // city string to filter the data
    // newGrades Array of new grads as parameters for updating the list

      const filteredCity =  getListStudents.filter((x) => x.location === city);
      const updatedStudents = filteredCity.map((student) => {
        const newStudent = { ...student, grade: newGrades[student.id == newGrades.studentId] };
        return newStudent;
      });
      return updatedStudents;
}