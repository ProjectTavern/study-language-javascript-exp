# 함수

## 자바스크립트에서의 함수
함수 선언의 차이점
~~~javascript
/* 함수 호이스팅 발생 */
qoov();
function qoov() {
  console.log("so crz");
}
~~~
~~~javascript
/* 변수 호이스팅 발생 */
qoov();
var qoov = function() {
  console.log("so crz");
}
~~~
