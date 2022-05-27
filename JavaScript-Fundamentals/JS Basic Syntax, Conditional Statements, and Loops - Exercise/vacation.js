function vacation(groupOfPeople, type, day) {
    let price = 0;

    switch (type) {
        case "Students":
            if (day === "Friday") {
                price = groupOfPeople * 8.45;
            } else if (day === "Saturday") {
                price = groupOfPeople * 9.80;
            } else if (day === "Sunday") {
                price = groupOfPeople * 10.46;
            }
            if (groupOfPeople >= 30) {
                price *= 0.85;
            }
            break;
        case "Business":
            if (day === "Friday") {
                price = groupOfPeople * 10.90;
            } else if (day === "Saturday") {
                price = groupOfPeople * 15.60;
            } else if (day === "Sunday") {
                price = groupOfPeople * 16;
            }
            if (groupOfPeople >= 100) {
                groupOfPeople -= 10;
                if (day === "Friday") {
                    price = groupOfPeople * 10.90;
                } else if (day === "Saturday") {
                    price = groupOfPeople * 15.60;
                } else if (day === "Sunday") {
                    price = groupOfPeople * 16;
                } 
            }
            break;
        case "Regular":
            if (day === "Friday") {
                price = groupOfPeople * 15;
            } else if (day === "Saturday") {
                price = groupOfPeople * 20;
            } else if (day === "Sunday") {
                price = groupOfPeople * 22.50;
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                price *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
    )