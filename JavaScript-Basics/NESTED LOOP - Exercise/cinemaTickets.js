function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let totalTickets = 0;
    let standardCount = 0;
    let kidsCount = 0;
    let studentCount = 0;

    while (command !== "Finish") {
        let movieName = command;
        let freeSpaces = Number(input[index]);
        index++;
        let tempCommand = input[index];
        index++;
        let tempTickets = 0;

        while (tempCommand !== "End") {
            tempTickets++;

            switch (tempCommand) {
                case "standard":
                    standardCount++;
                    break;
                case "kid":
                    kidsCount++;
                    break;
                case "student":
                    studentCount++;
                    break;
            }
            if (tempTickets >= freeSpaces) {
                break;
            }
            tempCommand = input[index];
            index++;
        }
        totalTickets += tempTickets;
        let tempEmptySpace = tempTickets / freeSpaces * 100;
        console.log(`${movieName} - ${tempEmptySpace.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTickets}`);
    let studentPr = studentCount / totalTickets * 100;
    let standardPr = standardCount / totalTickets * 100;
    let kidsPr = kidsCount / totalTickets * 100;

    console.log(`${studentPr.toFixed(2)}% student tickets.`);
    console.log(`${standardPr.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPr.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])