"use strict";
function Parent () {
    this.name = "Sherlock";
}

Parent.prototype.action = function () {
    console.log(this.name + " Tired and Sleep.");
}

function Child(){}

Child.prototype = new Parent();

Child.prototype.constructor = Child;

Child.prototype.action = function(){
    console.log(this.name + " Studying now.");
}

Child.prototype.action = function(){
    Parent.prototype.action.call(this);
    console.log("Test on.");
}

let someone = new Child();
someone.action();

// 이와 같은 prototype 의 확장은 오용이며 몽키패칭이라 추천하지 않는다.