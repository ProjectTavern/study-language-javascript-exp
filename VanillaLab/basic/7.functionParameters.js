function fnParameterTest(element) {
  console.log("arguments: ", arguments);
  console.log("paramter: ", element);
}

var test = "Test";
fnParameterTest(test, "TestParam");
// fnParameterTest();
