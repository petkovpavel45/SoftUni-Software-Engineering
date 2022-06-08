function magicSum(array, magicNum) {
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        for(let j = i + 1; j < array.length; j++) {
            let nextNum = array[j]
            let sum = currentNum + nextNum;
            if(sum === magicNum)
            console.log(`${currentNum} ${array[j]}`);
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)