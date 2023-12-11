function prime_numbers(n) {
    let arr = new Array(n)
    let counter = 0
    let x = 2

    while (counter < n) {
        let flag = true
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                flag = false
                break
            }
        }
        if (flag) {
            arr[counter] = x
            counter = counter + 1
        }
        x = x + 1
    }

    return arr
}

console.log(prime_numbers(5))