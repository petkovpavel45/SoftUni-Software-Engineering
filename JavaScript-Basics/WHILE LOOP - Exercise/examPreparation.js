function examPreparation(input) {
    let index = 0;
    let countNegativeGrades = Number(input[index]);
    index++;
    
    let command = input[index];
    index++;

    let counter = 0;
    let sumGrades = 0;
    let counterProblems = 0;
    let isNeedABreak = false;
    let lastProblem = "";

    while(command !== "Enough") {
        let nameTask = command;
        lastProblem = nameTask;
        let grades = Number(input[index]);
        index++;
        counterProblems++;
        sumGrades += grades;

        if(grades <= 4){
            counter++;
        }
        if(counter === countNegativeGrades) {
            console.log(`You need a break, ${counter} poor grades.`);
            isNeedABreak = true;
            break;
        }
        command = input[index];
        index++;
    }
    if(!isNeedABreak) {
        let avg = sumGrades / counterProblems;
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${counterProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
