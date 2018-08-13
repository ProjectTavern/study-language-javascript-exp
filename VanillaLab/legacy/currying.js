function basicCurryingLogic (x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        }
    };
}
console.log(basicCurryingLogic(2)(3)(4));

Function.prototype.curry = function (one) {
    var originFunction = this;
    var target = originFunction.length;
    console.log(target);
    var args = [];
    function next (nextOne) {
        args = args.concat(nextOne);
        if(args.length === target) {
            return originFunction.apply(null, args);
        } else {
            return function (nextOne) { return next(nextOne) };
        }
    }
    return next(one);
};

function multiCalc (a, b, c, d) {
    var result = 1;
    var argsLength = arguments.length;
    for (var i = 0; i < argsLength; i++) {
        result *= arguments[i];
    }
    return result;
}

console.log(multiCalc.curry(2)(3)(4)(5));