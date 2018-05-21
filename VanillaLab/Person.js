function Person(firstName){
    this.firstName = firstName;
}

Person.prototype.walk = function(){
    console.log("I am walking.");
};

Person.prototype.walk = function(){
    console.log("I am walking in the rain.");
};

Person.prototype.sayHello = function(){
    console.log("Hello, I'm " + this.firstName);
};

function Student(firstName, subject) {
    if(arguments.length < 2) {
        throw new Error("Not enought arguments. Need: 2, current: " + arguments.length);
    }
    Person.call(this, firstName);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function() {
    console.log("Hello, I'm " + this.firstName + ". I'am studying " + this.subject + ".");
};

Student.prototype.sayGoodBye = function() {
    console.log("Goodbye!");
};

let sherlock = new Student();
sherlock.sayHello();