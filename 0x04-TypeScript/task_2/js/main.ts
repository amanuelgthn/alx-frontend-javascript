interface DirectorInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    workDirectorTasks() : string;
}
interface TeacherInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    workTeacherTasks() : string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working form home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "cannot work from home";
    }
    getCoffeeBreak(): string {
        return "cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

const createEmployee = (salary: string | number ): Teacher | Director => {
    if (parseInt(salary as string) < 500) {
        return new Teacher;
    }
    else {
        return new Director;
    }
}

const isDirector = (employee: Director | Teacher) => {
    return employee instanceof Director
}

const executeWork = (employee: Director | Teacher) => {
    if (isDirector(employee)) {
        console.log((employee as Director).workDirectorTasks());
    }
    else {
        console.log((employee as Teacher).workTeacherTasks());
    }
}

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects) => {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
