
var rotate = function (nums, k) {
    const n = nums.length;

    for (let i = 0; i < k; i++) {

        const lastElement = nums[n - 1];

        for (let j = n - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }

        nums[0] = lastElement;
    }
};
