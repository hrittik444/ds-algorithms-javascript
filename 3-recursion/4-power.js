// Find power by specifying number and exponent, recursively.

// Solution:
function power(num, exp) {
    if (exp === 1) return num;

    return num * power(num, --exp);
}

console.log(power(2, 4));