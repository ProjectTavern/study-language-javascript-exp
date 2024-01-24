function multiplyAbsolute(number, factor) {
    function multiply(number) {
        return number * factor;
    }
    if (number < 0)
        return multiply(-number);
    else
        return multiply(number);
}
