function softUniReception(input) {
  let answerPerH = input
    .slice(0, input.length - 1)
    .map(Number)
    .reduce((a, b) => a + b);
  let countStudents = Number(input.pop());
  let countHour = 0;
  while (countStudents > 0) {
    countStudents -= answerPerH;
    countHour++;
    if (countHour % 4 === 0) {
      countHour++;
    }
  }
  console.log(`Time needed: ${countHour}h.`);
}
softUniReception(["1", "2", "3", "45"]);
