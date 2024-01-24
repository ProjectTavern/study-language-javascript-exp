var num1 = 1;
var num2 = 1;
console.log("number: ", num1 == num2);

var str1 = "str";
var str2 = "str";
console.log("string: ", str1 == str2);

var bool1 = true;
var bool2 = true;
console.log("boolean: ", bool1 == bool2);

var obj1 = {};
var obj2 = {};
console.log("object: ", obj1 == obj2);

var obj3 = new Object();
var obj4 = new Object();
console.log("new object: ", obj3 === obj4);

console.log("==========================");

var compareNumber = 1;
var compareString = "1";

console.log("compare value: ", compareNumber == compareString);
console.log("compare value + type: ", compareNumber === compareString)

var e = 1;