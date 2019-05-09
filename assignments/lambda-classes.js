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
        return `Today we are learning about ${subject}!`;
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
    listsSubjects(student) {
        return (this.favSubjects); 
    }
    PRAssignment(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

};

class ProjectManager extends Instructor {
    constructor(pmattr) {
        super(pmattr);
        this.gradClassName = pmattr.gradClassName;
        this.favInstructor = pmattr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
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

const rushi = new Student({
    name: 'Rushi Arumalla',
    location: 'Los Angeles',
    age: '21',
    previousBackground: 'college dropout',
    className: 'WEB20',
    favSubjects: ['HTML, CSS, JavaScript']
});

const adam = new Student({
    name: 'Adam Smith',
    location: 'San Fransisco',
    age: '28',
    previousBackground: 'janitor',
    className: 'WEB18',
    favSubjects: ['HTML, CSS, JavaScript, React, Redux']
});

const ian = new ProjectManager({
    name: 'Ian Belknap',
    location: 'Florida',
    age: '28',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'I code in my sleep',
    gradClassName: 'WEB16',
    favInstructor: 'Josh Knell'
});

const derek = new ProjectManager({
    name: 'Derek',
    location: 'San Diego',
    age: '25',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: 'Ian is a better PM than me',
    gradClassName: 'WEB16',
    favInstructor: 'Josh Knell'
});


console.log(ian.speak());
console.log(rushi.listsSubjects());
console.log(derek.favLanguage);
console.log(ian.debugsCode(rushi, 'React'));
console.log(derek.standUp('WEB20'));
console.log(adam.sprintChallenge('Javascript Fundamentals'));
console.log(dan.demo('SASS'));
console.log(dan.grade(rushi, 'JavaScript'));
console.log(derek.speak());
console.log(rushi.PRAssignment('Applied JavaScript'));
console.log(derek.catchPhrase); 