const generator = function* generator() {
  console.log("g1-1")
  yield 10;
  console.log("g1-2")
  yield 20;
  console.log("g1-3")
  return "finished";
}

const gen = generator();

console.log(gen);
console.log(gen.next());
console.log(gen.return("abc"));
console.log(gen.next());
