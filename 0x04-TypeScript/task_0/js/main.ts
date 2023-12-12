interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: "Abel",
    lastName: "Mume",
    age: 29,
    location: "addis"
}

const studentTwo: Student = {
    firstName: "Asher",
    lastName: "Tolchard",
    age: 28,
    location: "Istanbul"
}

const studentsList:Student[] = [studentOne, studentTwo];

const tableElement: HTMLTableElement = document.createElement('table');

const headerRow = document.createElement('tr');
headerRow.innerHTML = `<th>firstName</th><th>lastName</th><th>Age</th><th>Location</th>`;
tableElement.appendChild(headerRow);
for (const student of studentsList) {
    const row : HTMLTableRowElement = document.createElement('tr')
    row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.location}</td>
        tableElement.appendChild(row)`;
}