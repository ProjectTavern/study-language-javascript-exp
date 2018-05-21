const searchTarget = "123-4567-8992";

/* .은 대표적인 와일드 카드로써 모든 문자를 찾는다 => 행의 끝에 오는 개행 문자는 제외 */
let regExp = /\d\d\d../;

console.log(searchTarget.match(regExp));