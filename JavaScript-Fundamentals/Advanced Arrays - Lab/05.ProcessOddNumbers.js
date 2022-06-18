function processOddNumbers(arr){
    let res = arr.filter((num, i) => i % 2 !== 0).map((x) => x * 2).reverse().join(' ');
    console.log(res);
}
processOddNumbers([10, 15, 20, 25])