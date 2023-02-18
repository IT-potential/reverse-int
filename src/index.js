module.exports = function reverse(n) {
    let num = Math.abs(n);
    let number = num.toString().split("");
    let arr = [];
    for (let el of number) {
        arr.unshift(el);
    }
    return +arr.join("");
};
