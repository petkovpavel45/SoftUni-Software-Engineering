function schoolCamp(input) {
    let season = input[0];
    let group = input[1];
    let countStudents = Number(input[2]);
    let countNights = Number(input[3]);
    
    let price = 0;
    let sport = 0;

    if(season === "Winter") {
        switch(group) {
            case "boys":
                sport = "Judo";
                price = countNights * countStudents * 9.60;
                break;
            case "girls":
                sport = "Gymnastics";
                price = countNights * countStudents * 9.60;
                break;

            case "mixed":
                sport = "Ski";
                price = countNights * countStudents * 10;
                break;
        }
    }else if(season === "Spring") {
        switch(group) {
            case "boys":
                sport = "Tennis";
                price = countNights * countStudents * 7.20;
                break;
            case "girls":
                sport = "Athletics";
                price = countNights * countStudents * 7.20;
                break;

            case "mixed":
                sport = "Cycling";
                price = countNights * countStudents * 9.50;
                break;
        }
    } else if(season === "Summer") {
        switch(group) {
            case "boys":
                sport = "Football";
                price = countNights * countStudents * 15;
                break;
            case "girls":
                sport = "Volleyball";
                price = countNights * countStudents * 15;
                break;

            case "mixed":
                sport = "Swimming";
                price = countNights * countStudents * 20;
                break;
        }
    }
    if(countStudents >= 50) {
        price *= 0.50;
    } else if(countStudents >= 20 && countStudents < 50) {
        price *= 0.85;
    } else if(countStudents >= 10 && countStudents < 20) {
        price *= 0.95;
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "girls", "20", "7"])