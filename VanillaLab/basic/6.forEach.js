function customForEach(callback) {
  console.log("Started");
  var length = 0;

  while(length < this.length) {
    var elem = this[length];
    var index = length;
    callback(elem, index);
    length++;
  }

  console.log("End");
}

Array.prototype.customForEach = customForEach;

var Arr1 = ["ace", "bear", "cat"];

Arr1.customForEach(function(elem, index) {
  console.log("Processing");
  console.log("elem: ", elem);
  console.log("index: ", index);
});

function testFn() {
  console.log("Test13");
}