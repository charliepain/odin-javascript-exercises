const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) return "OOPS"
    if (n <= 1) return n;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, b + a];
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
