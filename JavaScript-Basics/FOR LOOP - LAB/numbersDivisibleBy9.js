function numbersDivisibleBy9(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let sum = 0;
    let res = "";
    for (let i = startNum; i <= endNum; i++) {
        if(i % 9 === 0){
            sum += i;
            res += i + "\n";
        }      
    }
    console.log("The sum: " + sum);
    console.log(res);
}
numbersDivisibleBy9(["100", "200"])