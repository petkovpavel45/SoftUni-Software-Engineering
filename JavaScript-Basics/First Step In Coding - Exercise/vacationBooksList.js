function vacationBooksList (input){

    let countPages = Number(input[0]);
    let pagesOneHour = Number(input[1]);
    let countDays = Number(input[2]);

    let totalTimeForOneBook = countPages / pagesOneHour;
    let hoursPerDay = totalTimeForOneBook / countDays;

    console.log(hoursPerDay);

}
vacationBooksList(["212", "20", "2"])