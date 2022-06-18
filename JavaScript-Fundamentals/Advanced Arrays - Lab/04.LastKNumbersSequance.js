function lastKNumbersSequance (n, k){
    let arr = [1];
    for(let i = 0; i < n -1; i++){
        let lastK = arr.slice(-k);
        let sum = 0;
        for (let element of lastK) {
            sum += element
        }
        arr.push(sum);
    }
    console.log(arr.join(" "));
}
lastKNumbersSequance(6, 3)