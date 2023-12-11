

function maxSumSubbArray(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i] = Math.max(arr[i], arr[i] + arr[i - 1])
        sum = Math.max(sum, arr[i])
    }
    return sum
}

console.log(maxSumSubbArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))