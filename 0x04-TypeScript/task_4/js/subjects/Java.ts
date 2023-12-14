/// <reference path="Teacher.ts"/>

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getREquirements(): string {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher(): string {
            if(!this.teacher.experienceTeachingJava) {
                return 'No available teacher';
            }
            return `Available Teacher: $(this.teacher.firstName)`;
        }
}