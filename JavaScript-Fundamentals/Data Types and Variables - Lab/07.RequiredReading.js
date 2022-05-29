function requiredReading(numberOfPages, pagesReadOneHour, daysToRead) {
    let totalTime = numberOfPages / pagesReadOneHour;
    let readEachDay = totalTime / daysToRead;
    console.log(readEachDay);
}
requiredReading(212, 20 ,2)