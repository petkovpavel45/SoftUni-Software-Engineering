function tennisRanklist(input) {
    let index = 0;
    let countTournaments = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;

    let tempPoints = 0;
    let countWin = 0;

    for (let i = 0; i < countTournaments; i++) {
        let res = input[index];
        index++;

        switch (res) {
            case "W":
                tempPoints += 2000;
                countWin++;
                break;
            case "F":
                tempPoints += 1200;
                break;
            case "SF":
                tempPoints += 720;
                break;
        }
    }

    let finalPoints = startPoints + tempPoints;
    let avgPoints = tempPoints / countTournaments;
    let percentage = (countWin / countTournaments) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(percentage.toFixed(2) + "%");

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])