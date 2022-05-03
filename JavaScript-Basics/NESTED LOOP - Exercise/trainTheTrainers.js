function trainTheTrainers(input) {
    let index = 0;
    let people = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let counter = 0;
    let sumGrade = 0;
    while(command !== "Finish") {
        let name = command;
        let tempSumGrade = 0;
        counter++;
        for(let i = 0; i < people; i++) {
            let tempGrade = Number(input[index]);
            index++;
            tempSumGrade += tempGrade;
        }
        let tempAvg = tempSumGrade / people;
        sumGrade += tempAvg;
        console.log(`${name} - ${tempAvg.toFixed(2)}.`);
        command = input[index];
        index++;
    }
    let avgGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])
