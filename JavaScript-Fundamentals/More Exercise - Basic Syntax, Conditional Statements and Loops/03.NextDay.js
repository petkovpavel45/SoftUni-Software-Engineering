function nextDay(inputYear, inputMonth, inputDay) {
    let year = Number(inputYear);
    let month = Number(inputMonth) - 1;
    let day = Number(inputDay);

    let date = new Date(year, month, day);
    let nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    let outputYear = nextDate.getFullYear();
    let outputMonth = nextDate.getMonth() + 1;
    let outputDay = nextDate.getDate();
    console.log(`${outputYear}-${outputMonth}-${outputDay}`);

}
nextDay(2016, 9, 30)