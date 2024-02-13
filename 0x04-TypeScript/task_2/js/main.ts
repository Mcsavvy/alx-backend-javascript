export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
export interface TeacherInterface { 
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home";
    }
    getCoffeeBreak() {
        return "Getting a coffee break";
    }
    workDirectorTasks() {
        return "Getting to director tasks";
    }
}
export class Teacher implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home";
    }
    getCoffeeBreak() {
        return "Cannot have a break";
    }
    workTeacherTasks() {
        return "Getting to work";
    }
}
export function createEmployee(salary: (string | number)): (Director | Teacher) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
    

}

export function isDirector(employee: (Director | Teacher)): boolean {
    if (employee instanceof Director) {
        return true;
    }
    return false;
}

export function executeWork(employee: (Director | Teacher)) {
    if (isDirector(employee)) {
        (employee as Director).workDirectorTasks();
    }
    (employee as Teacher).workTeacherTasks();
}

export type Subjects = ('Math' | 'History')

export function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}
