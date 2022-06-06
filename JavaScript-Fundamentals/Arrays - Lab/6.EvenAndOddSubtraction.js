function evenAndOddSubtraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for(let nums = 0; nums < arr.length; nums++) {
        if(arr[nums] % 2 === 0){
            sumEven += arr[nums];
        }else {
            sumOdd += arr[nums];
        }
    }
    let res = sumEven - sumOdd;
    console.log(res);
}
evenAndOddSubtraction([1,2,3,4,5,6])