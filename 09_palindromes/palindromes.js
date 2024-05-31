const palindromes = function (string) {
    let arrayString = string.split("");
    let arrayStringLetters = arrayString.filter(char => {
        return !`!?\\/ (),.;'"`.includes(char);
    });
    let arrayStringLower = arrayStringLetters.map(char => char.toLowerCase());
    let modifiedString = arrayStringLower.join("");
    let reverseModifiedString = arrayStringLower.reverse().join("");
    return modifiedString === reverseModifiedString;
};

// Do not edit below this line
module.exports = palindromes;
