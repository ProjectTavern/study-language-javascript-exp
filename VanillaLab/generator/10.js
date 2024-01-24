function* genOne() {
  const dataOne = yield;
  console.log(dataOne);
  const dataTwo = yield;
  console.log(dataTwo);
}

const gen = genOne();
gen.next();
gen.next(10);
gen.next(20);