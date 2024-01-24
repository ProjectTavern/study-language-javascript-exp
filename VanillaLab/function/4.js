function majority(numbers) {
    const numbersLength = numbers.length;
    let majorNumber = -1;
    let majorCount = 0;
    numbers.forEach(function(number) {
        let count = 0;
        numbers.forEach(function(target) {
            if (number === target) {
                count += 1;
            }
        });
        if (count > majorCount) {
           majorCount = count;
           majorNumber = number;
        }
    });
    return majorNumber;
}