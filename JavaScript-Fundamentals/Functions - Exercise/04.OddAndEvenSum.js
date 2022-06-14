function oddAndEvenSum(num) {
    let numAsString = num.toString();
    
    function oddSum(numAsText) {
        let sum = 0;
        for (let i = 0; i < numAsText.length; i++) {
            let charNum = Number(numAsText[i]);

            if (charNum % 2 !== 0) {
                sum += charNum;    
            }
        }
        return sum;
    }
    function evenSum(numAsText) {
        let sum = 0;
        for (let i = 0; i < numAsText.length; i++) {
            let charNum = Number(numAsText[i]);

            if (charNum % 2 === 0) {
                sum += charNum;    
            }
        }
        return sum;
    }
    console.log(`Odd sum = ${oddSum(numAsString)}, Even sum = ${evenSum(numAsString)}`);
}
oddAndEvenSum(1000435);
