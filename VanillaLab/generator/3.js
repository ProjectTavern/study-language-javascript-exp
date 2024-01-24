const generator = function* generator() {
  try {
    console.log("g1-1")
    yield 10;
    console.log("g1-2")
    yield 20;
    console.log("g1-3")
    return "finished";
  } catch (error) {
    console.error("g1-catch", error);
    return "error";
  }
}

const gen = generator();

console.log(gen);
console.log(gen.next());
console.log(gen.throw("error"));
console.log(gen.next());
