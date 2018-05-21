class Test {
    
    constructor(name){
        this.name = name;
    }
    
    play(){
        console.log(this.name + " is playing now..");
    }
}

let funnyTest = new Test('TESTER');

funnyTest.play()

class OverrideTest extends Test{
    
    constructor(){
        super();
    }

    play(){
        console.log("OVERRIDE TEST");
    }
}

let overra = new OverrideTest();
overra.play()