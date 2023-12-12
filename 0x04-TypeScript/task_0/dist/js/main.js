var studentOne = {
    firstName: "Abel",
    lastName: "Mume",
    age: 29,
    location: "addis"
};
var studentTwo = {
    firstName: "Asher",
    lastName: "Tolchard",
    age: 28,
    location: "Istanbul"
};
var studentsList = [studentOne, studentTwo];
var tableElement = document.createElement('table');
var headerRow = document.createElement('tr');
headerRow.innerHTML = "<th>firstName</th><th>lastName</th><th>Age</th><th>Location</th>";
tableElement.appendChild(headerRow);
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var row = document.createElement('tr');
    row.innerHTML = "\n        <td>".concat(student.firstName, "</td>\n        <td>").concat(student.lastName, "</td>\n        <td>").concat(student.age, "</td>\n        <td>").concat(student.location, "</td>\n        ");
    tableElement.appendChild(row);
}
//# sourceMappingURL=main.js.map