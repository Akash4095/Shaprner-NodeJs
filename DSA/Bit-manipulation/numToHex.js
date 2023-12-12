var toHex = function(num) {
    if (num === 0) {
   return "0";
 }
 const HEX_CHARS = "0123456789abcdef";
 let result = "";

 while (num !== 0) {
   
   result = HEX_CHARS[num & 0xf] + result;
   
   num >>>= 4;
 }
 return result;
};

// Input: num = -1
// Output: "ffffffff"