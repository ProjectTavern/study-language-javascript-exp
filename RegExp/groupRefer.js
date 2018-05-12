const searchTarget = "123-4567-8992-41213";

let regExp = /(\d{3,4}[.-]?)+/;

console.log(searchTarget.match(regExp));