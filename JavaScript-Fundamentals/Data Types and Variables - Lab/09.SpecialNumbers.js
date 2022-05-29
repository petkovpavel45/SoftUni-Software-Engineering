function specialNumbers(num){
    for(let n = 1; n <= num; n++) {
        let res = 0;
        let numAsString = String(n);
        for(let i = 0; i < numAsString.length; i++) {
            res += Number(numAsString[i]);
        }
        let isSpecial = false;
        if(res == 5 || res == 7 || res == 11) {
            isSpecial = true;
        }
        if(isSpecial) {
            console.log(`${n} -> True`);
        } else {
            console.log(`${n} -> False`);
        }
    }
}
specialNumbers(15);