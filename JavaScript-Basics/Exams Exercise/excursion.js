function excursion(input) {
    let countPeople = Number(input[0]);
    let countNights = Number(input[1]);
    let countCardsForTransport = Number(input[2]);
    let ticketsForMuseum = Number(input[3]);

    let nightsOnePerson = countNights * 20;
    let cardsForTransportOnePerson = countCardsForTransport * 1.60;
    let ticketsForMuseumOnePerson = ticketsForMuseum * 6;
    let totalSumForOnePerson = nightsOnePerson + cardsForTransportOnePerson + ticketsForMuseumOnePerson;
    let sumForAll = totalSumForOnePerson * countPeople;
    let totalSum = sumForAll + (sumForAll * 0.25);
    console.log(totalSum.toFixed(2));
}
excursion(["20", "14", "30", "6"])