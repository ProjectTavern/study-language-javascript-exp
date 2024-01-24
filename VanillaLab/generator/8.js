function* generatorOne() {
  yield 2;
  yield 3;
}

function* generatorTwo() {
  yield 1;
  yield* generatorOne();
  yield 4;
}

function* generatorThree() {
  yield 1;
  yield generatorOne();
  yield 4;
}

console.log("========= Y I E L D * =========");
const generator_1 = generatorTwo();

console.log(generator_1.next());
console.log(generator_1.next());
console.log(generator_1.next());
console.log(generator_1.next());

console.log("========= Y I E L D =========")
const generator_2 = generatorThree();

console.log(generator_2.next());
console.log(generator_2.next());
console.log(generator_2.next());
console.log(generator_2.next());