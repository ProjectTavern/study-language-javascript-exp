(function countDown (i) {
    console.log(i);
    if (i <= 1) {
        return undefined;
    } else {
        countDown(i-1);
    }
})(8);