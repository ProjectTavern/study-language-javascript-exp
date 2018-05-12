function printTriangle(num) {
    var result = '';

    var i = 0;

    for ( ; i < num; i++ ) {
        var k = 0;
        for ( ; k < i + 1; k++ ) {
            result += "*";
        }
        result += "\n";
    }

    return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( printTriangle(3) );