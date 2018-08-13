var calcPlus = function (a, b, c, d) {
    console.log(a, b, c, d);
    return a + b + c;
};

Function.prototype.partial = function () {
    var args = [].slice.apply(arguments);
    var self = this;
    return function () {
        return self.apply(null, args.concat([].slice.apply(arguments)));
    };
};

var plusA = calcPlus.partial(1, 2);
console.log(plusA(2, 3));


var bindExample = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c;
};

var plusB = bindExample.bind(null, 1);
console.log(plusB(3, 4));