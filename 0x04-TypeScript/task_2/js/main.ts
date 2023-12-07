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

class Director implements DirectorInterface {
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

class Teacher implements TeacherInterface {
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

createEmployee (salary: string | number): Employee{
    if (salary < 500) {
        return Teacher
    }
    else {
        return Director
    }
}