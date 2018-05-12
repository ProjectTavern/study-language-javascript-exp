function findKim(seoul){
    var idx = 0;

    var i = 0;
    var findLength = seoul.length;
    var target = "Kim";

    for ( i = 0; i < findLength; i++ ) {
        if ( seoul[i] === target ) {
            idx = i;
        }
    }

    return "김서방은 " + idx + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));