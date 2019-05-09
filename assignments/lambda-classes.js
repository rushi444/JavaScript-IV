// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello, my name is ${this.name} and I am from ${this.location}`
    }
};

class Instructor extends Person {
    constructor(instructorattr) {
        super(instructorattr);
        this.specialty = instructorattr.specialty;
        this.favLanguage = instructorattr.favLanguage;
        this.catchPhrase = instructorattr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

};

class Student extends Person {
    constructor(studentattr) {
        super(studentattr);
        this.previousBackground = studentattr.previousBackground;
        this.className = studentattr.className;
        this.favSubjects = studentattr.favSubjects;
    }
    listsSubjects() {
        console.log(favSubjects);
    }
    PRAssignment(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }

};

class ProjectManager extends Instructor {
    constructor(pmattr) {
        super(pmattr);
        this.gradClassName = pmattr.gradClassName;
        this.favInstructor = pmattr.favInstructor;
    }
    standUp(name, subject) {
        return `${name} dubugs ${student.name}'s code on ${subject}`;
    }
    debugsCode(name, subject) {
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }

};

const dan = new Instructor({
    name: 'Dan Levy',
    location: 'Denver',
    age: '35',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'I love cats'
});

const josh = new Instructor({
    name: 'Josh Knell',
    location: 'California',
    age: '37',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: 'Flintstones is my favorite TV show'
});

