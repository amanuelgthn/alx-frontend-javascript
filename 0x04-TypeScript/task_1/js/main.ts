interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsofExperience?: number;
    location: string;
    [propName: string]: any;
};

const teacher1: Teacher = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: 'London',
    contract: false,
}
console.log(teacher1);

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
    console.log(firstName.startsWith, ".", lastName);
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workonHomework(): string {
        return "Currently working";
    }
    displayName(firstName: string): string {
        return firstName
    }
}
