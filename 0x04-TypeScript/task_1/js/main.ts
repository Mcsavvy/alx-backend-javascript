export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    [key: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string{
    return `${firstName[0]}. ${lastName}`
}
export interface printTeacherFunction {
    (firstName: string, lastName: string):string
}

export interface IsStudent {
     workOnHomework(): string;
     displayName(): string;
}
export interface IsStudentConstructor {
    new (firstName: string, lastName: string): IsStudent;
}
export class StudentClass implements IsStudent {
    private firstName!: string;
    private lastName!: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return "Currently working";
    }
    displayName() {
        return this.firstName;
    }
}
