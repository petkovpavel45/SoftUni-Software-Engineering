function equalSumsEvenOddPosition(input) {
    let firstNum = (input[0]);
    let secondNum = (input[1]);
    let printLine = '';

    for(let i = firstNum; i <= secondNum; i++) {

        let currentNum = "" + i + " ";
        let oddSum = 0;
        let evenSum = 0;

        for(let j = 0; j <= currentNum.length; j++){
            let digitNum = Number(currentNum.charAt(j));
            if(j % 2 === 0) {
                evenSum += digitNum;
            }else{
                oddSum += digitNum;
            }
        }
        if(oddSum === evenSum) {
            printLine += `${i}`;
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPosition(["100000",
"100050"])
