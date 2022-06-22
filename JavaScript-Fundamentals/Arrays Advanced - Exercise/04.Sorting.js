function sorting(numsArr) {
    let arr = [];
    let nums = numsArr.sort((a, b) => b - a);

    while (nums.length > 0) {
        let biggest = nums.shift();
        arr.push(biggest);
        let smallest = nums.pop();
        arr.push(smallest);

    }
    console.log(arr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])