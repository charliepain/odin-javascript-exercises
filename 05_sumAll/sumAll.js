const sumAll = function (number1, number2) {
    if (typeof number1 !== "number"
        || typeof number2 !== "number"
        || number1 < 0
        || number2 < 0
    ) return "ERROR";

    if (number1 > number2) {
        let temporary1 = number1;
        number1 = number2;
        number2 = temporary1;
    }

    let sum = 0;
    for (let i = number1; i <= number2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
