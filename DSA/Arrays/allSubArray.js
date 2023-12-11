function print_subarray(arr) {
    /*Function to print all the subarrays given in an array*/
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            for (let k = i; k <= j; k++) {
                res += arr[k];
            }
            console.log(res);
            res = ""
        }
    }

}

console.log(print_subarray([1,2,3,4,5]))