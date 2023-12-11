
var maximumWealth = function (arr) {

    let maxWealth = 0;

    for (let i = 0; i < arr.length; i++) {

        let currWealth = arr[i].reduce((sum, amount) => sum + amount, 0);

        maxWealth = Math.max(maxWealth, currWealth);
    }

    return maxWealth;
};