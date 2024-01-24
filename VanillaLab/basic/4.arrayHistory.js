var test = [4, 2, 3];

for (var i = 0; i < test.length; i+=2) {
  console.log("index: ", i);
  console.log("elem: ", test[i]);
}

console.log("======================");

test.forEach(function(index, elem) {
  if ( index%2 === 0 ) {
    console.log("index: ", index);
    console.log("elem: ", elem);
  }
});