
var sortByBits = function(arr) {

    const customSort = (a, b) => {
      const countA = countSetBits(a);
      const countB = countSetBits(b);
      if (countA !== countB) {
        return countA - countB;
      }
      return a - b;
    };
  
    const countSetBits = (num) => {
      let count = 0;
      while (num !== 0) {
        count += num & 1;
        num >>>= 1;
      }
      return count;
    };
    arr.sort(customSort);
    return arr;
  };

//   Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]