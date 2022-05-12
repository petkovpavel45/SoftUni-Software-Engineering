function grades(input) {
    let countStundents = Number(input[0]);
    let index = 1;
    let topStudents = 0;
    let verryGoodStudents = 0;
    let goodStudents = 0;
    let failedStuden = 0;
    let sumGrades = 0;

    for (let i = 1; i <= countStundents; i++) {
        let grade = Number(input[index]);
        index++;
        if (grade <= 2.99) {
            failedStuden ++;
        } else if (grade >= 3.00 && grade <= 3.99) {
            goodStudents ++;
        } else if (grade >= 4.00 && grade <= 4.99) {
            verryGoodStudents ++;
        } else {
            topStudents ++;
        }
        sumGrades += grade;
    }
    let topStudentsPr = topStudents / countStundents * 100;
    let verryGoodStudentsPr = verryGoodStudents / countStundents * 100;
    let goodStudentsPr = goodStudents / countStundents * 100;
    let failedStudenPr = failedStuden / countStundents * 100;
    let avg = sumGrades / countStundents;

    console.log(`Top students: ${topStudentsPr.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${verryGoodStudentsPr.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${goodStudentsPr.toFixed(2)}%`);
    console.log(`Fail: ${failedStudenPr.toFixed(2)}%`);
    console.log(`Average: ${avg.toFixed(2)}`);
}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])