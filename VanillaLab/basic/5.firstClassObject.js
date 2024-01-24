var Arr1 = [2, 3, 4];

console.log(Array.prototype.forEach);


class Array {
  forEach(callback) {
    callback(elem, index);

  }
  varTest(str) {

  }
}

Arr1.forEach(function (elem, index) {

});

function callback(element, index) {

}


var test = "test";
Arr1.varTest("test");
Arr1.varTest(test);
Arr1.forEach(function (index, elem) {
  console.log(elem);
});
Arr1.forEach(callback);