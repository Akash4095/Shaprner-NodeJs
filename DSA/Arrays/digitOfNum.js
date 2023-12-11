// Write a program to print the digits of a number .

// N - 153 . o/p = 351

function print_digits(n){
    
   while (n > 0) {
        const digit = n % 10;
        console.log(digit);
        n = Math.floor(n / 10);
    }
    
    
}