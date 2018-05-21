class Person {
    constructor(name){
        this.validator(arguments);
        this.name = name;
    }

    validator(value){
        if(!(value => value.length)) throw new Error("Error");
    }
    
    sayHi(){
        console.log(this.name + " say Hi!");
    }
}

let someone = new Person("Sherlock");
someone.sayHi();