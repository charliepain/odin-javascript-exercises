const repeatString = function(string, occurences) {
    if (occurences < 0) return "ERROR";
    repeatedString = "";
    for (let i = 0; i < occurences; i++) repeatedString += string;
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
