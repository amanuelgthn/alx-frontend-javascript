"use strict";
exports.__esModule = true;
exports.Teacher = exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working form home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
exports.Teacher = Teacher;
var createEmployee = function (salary) {
    if (parseInt(salary) < 500) {
        return new Teacher;
    }
    else {
        return new Director;
    }
};
var isDirector = function (employee) {
    return employee instanceof Director;
};
var executeWork = function (employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
};
var teachClass = function (todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
};
console.log(teachClass("Math"));
console.log(teachClass("History"));
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
