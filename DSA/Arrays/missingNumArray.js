
var missig_num_in_array = function(arr) {
    const n = nums.length + 1;
   
   // Calculate the sum of the first n natural numbers
   const expectedSum = (n * (n + 1)) / 2;
   
   // Calculate the sum of the given array
   const actualSum = nums.reduce((sum, num) => sum + num, 0);
   
   // The missing number is the diff between the expected and actual sums
   return expectedSum - actualSum;
};