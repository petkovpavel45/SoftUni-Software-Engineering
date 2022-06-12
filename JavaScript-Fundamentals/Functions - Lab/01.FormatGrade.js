function formatGrade(grade) {
    let formattedGrade = grade.toFixed(2);
    let descr;

    if (grade < 3.00) {
        formattedGrade = '2';
        descr = 'Fail'
    } else if (grade < 3.50) {
        descr = 'Poor'
    } else if (grade < 4.50) {
        descr = 'Good'
    } else if (grade < 5.50) {
        descr = 'Very good'
    } else {
        descr = 'Excellent'
    }
    console.log(`${descr} (${formattedGrade})`);
}
formatGrade(3.33)