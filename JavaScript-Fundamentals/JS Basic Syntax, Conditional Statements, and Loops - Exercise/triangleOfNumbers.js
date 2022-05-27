function triangleOfNumbers(n) {
    let res = "";
    
    for(let i = 1; i <= n; i++) {
        res = "";
        for(let j = 1; j <= i; j++) {
            res += i + " ";
        }
        console.log(res);
    }
}
triangleOfNumbers(7)