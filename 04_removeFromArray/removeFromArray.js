const removeFromArray = function (array, ...targets) {
    for (let i = 0; i < array.length; i++) {
        for (const target of targets) {
            if (array[i] === target) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
