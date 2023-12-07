interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Abel",
    lastName: "Mume",
    age: 29,
    location: "addis"
}

const student2: Student = {
    firstName: "Asher",
    lastName: "Tolchard",
    age: 28,
    location: "Istandbul"
}

let arr: Student[]=[student1, student2];
