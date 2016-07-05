function validate(value, options) {
    return validate.rules.every(function (rule) {
        return rule(value);
    });
}
module.exports = validate;

validate.rules = [
    isAllNumeric,
    is11Digits,
    isNotStartingWithZero,
    isValidRule1,
    isValidRule2
];

validate.validateAll = function(value) {
    var rv = {};

    validate.rules.forEach(function (rule) {
        rv[rule.name] = rule(value);
    });

    return rv;
};

function isAllNumeric(value) {
    return !isNaN(value);
}

function is11Digits(value) {
    return String(value).length === 11;
}

function isNotStartingWithZero(value) {
    return String(value)[0] != 0;
}

function isValidRule1(value) {
    var arr = String(value).split('').map(Number);

    var sum1 = arr.slice(0, 9).filter(function (val, i) { return !(i % 2) }).reduce(_sum);
    var sum2 = arr.slice(0, 9).filter(function (val, i) { return i % 2 }).reduce(_sum);

    return ((sum1 * 7 - sum2) % 10) === arr[9];
}

function isValidRule2(value) {
    var arr = String(value).split('').map(Number);

    return arr.slice(0, -1).reduce(_sum) % 10 === arr[10];
}

function _sum(a, b) {
    return a + b;
}
