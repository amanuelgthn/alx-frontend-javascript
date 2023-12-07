;
var teacher1 = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: 'London',
    contract: false
};
console.log(teacher1);
function printTeacher(firstName, lastName) {
    console.log(firstName.startsWith, ".", lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workonHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function (firstName) {
        return firstName;
    };
    return StudentClass;
}());
