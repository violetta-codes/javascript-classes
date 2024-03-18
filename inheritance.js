class User { 
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }



get fullName() {
    return `${this.firstName} ${this.lastName}`;
}

get birthYear() {
    return new Date().getFullYear() - this.age;
    }
};

class Teacher extends User {
    constructor(firstName, lastName, age, groups, yearsOfExperience) {
        super(firstName, lastName, age);
        this.groups = groups;
        this.yearsOfExperience = yearsOfExperience;
    }

    isGroupTeacher(group) {
        return this.groups.includes(group);
    }
};
class Student extends User {
    constructor(firstName, lastName, age, group, grade) {
        super(firstName, lastName, age);
        this.group = group;
        this.grade = grade;
    }

    static MIN_GRADE_FOR_SCHOLARSHIP = 4;

    isEligibleForScholarship() {
        return this.grade >= Student.MIN_GRADE_FOR_SCHOLARSHIP;
    }
}
const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 49, '62c', 3.9);

console.log(student1.fullName); 
console.log(student2.birthYear);

console.log(student1.isEligibleForScholarship()); 
console.log(student2.isEligibleForScholarship());

console.log(teacher1.isGroupTeacher(student1.group)); 
console.log(teacher1.isGroupTeacher(student2.group));

console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP);