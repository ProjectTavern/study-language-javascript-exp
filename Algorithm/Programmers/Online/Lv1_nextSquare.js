function nextSqaure(currentPotentialSquare){
    var result = "no";
    currentPotentialSquare = typeof currentPotentialSquare === "number" ? currentPotentialSquare : Number(currentPotentialSquare);
    var halfSquare = mathFloor(currentPotentialSquare/2);

    for (var i = 0; i < halfSquare; i++) {
        if ((i * i) === currentPotentialSquare) {
            var nextI = i + 1;
            result = nextI * nextI;
            break;
        }
    }

    return result;
}

function mathFloor(number) {
    var temperatureNumberToString = typeof number === "number" ? number.toString() : () => { throw new Error("Unexpected Type Error: Please Insert type of \"NUMBER\"") };

    var caseLength = temperatureNumberToString.length;
    var resultString = "";
    for (var i = 0; i < caseLength; i++) {
        if ( temperatureNumberToString[i] !== "." ) {
            resultString += temperatureNumberToString[i];
        } else {
            break;
        }
    }
    return Number(resultString);
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));