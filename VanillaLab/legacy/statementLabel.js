let breNum = 0;
outermost:
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i === 5 && j === 5) {
      break outermost;
    }
    breNum++;
  }
}
console.log(breNum);

let conNum = 0;
outerContinue:
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i === 5 && j === 5) {
      continue outerContinue;
    }
    conNum++;
  }
}
console.log(conNum);