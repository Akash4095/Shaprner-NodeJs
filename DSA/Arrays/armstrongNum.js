function check_armstrong(n) {

    const numString = String(n);
    const numDigits = numString.length;

    let sum = 0;
    let temp = n;

    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }


    if (sum === n) {
        console.log(true)
    } else {
        console.log(false)
    }

}
check_armstrong(153) // 1^3 + 5^3 + 3^3 == 153