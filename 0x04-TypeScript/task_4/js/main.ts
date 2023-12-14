/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();


export const cTeacher: Subjects.Teacher = {
    firstName: 'Gillaume',
    lastName: 'Salvado',
    experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirement());
console.log(cpp.getAvailableTeacher());

console.log('java');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirement());
console.log(cpp.getAvailableTeacher());

console.log('react');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirement());
console.log(cpp.getAvailableTeacher());
