function truckDriver(input) {
    let season = input[0];
    let kmMounthly = Number(input[1]);
    let salary = 0;

    if(kmMounthly <= 5000) {
        switch(season) {
            case "Spring":
                salary = kmMounthly * 0.75 * 4 * 0.90;
                break;
            case "Summer":
                salary = kmMounthly * 0.90 * 4 * 0.90;
                break;
            case "Autumn":
                salary = kmMounthly * 0.75 * 4 * 0.90;
                break;
            case "Winter":
                salary = kmMounthly * 1.05 * 4 * 0.90;
                break;
        }
    }else if (kmMounthly > 5000 && kmMounthly <= 10000) {
        switch(season) {
            case "Spring":
                salary = kmMounthly * 0.95 * 4 * 0.90;
                break;
            case "Summer":
                salary = kmMounthly * 1.10 * 4 * 0.90;
                break;
            case "Autumn":
                salary = kmMounthly * 0.95 * 4 * 0.90;
                break;
            case "Winter":
                salary = kmMounthly * 1.25 * 4 * 0.90;
                break;
        }
    } else if (kmMounthly > 10000 && kmMounthly <= 20000) {
        if(season === "Spring" || season === "Summer" || 
            season === "Autumn" || season === "Winter") {
                salary = kmMounthly * 1.45 * 4 * 0.90;
        }
    }
    console.log(salary.toFixed(2));
}
truckDriver(["Summer", "3455"])