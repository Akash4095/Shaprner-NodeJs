
var hasAlternatingBits = function (n) {
    const binaryStr = n.toString(2);

    for (let i = 0; i < binaryStr.length - 1; i++) {
        if (binaryStr[i] === binaryStr[i + 1]) {
            return false;
        }
    }
    return true;
};

let a = 0
for (let i = n/2; i < n; i++) {
    for (let j = 2; j <n; j--) {
        a = a + n/2
    }
}