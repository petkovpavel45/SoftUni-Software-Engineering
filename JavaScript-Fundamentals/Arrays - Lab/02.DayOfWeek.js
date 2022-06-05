function dayOfWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day >= 1 && day <= 7) {
        if (day === 1) {
            console.log(days[0]);
        } else if (day === 2) {
            console.log(days[1]);
        } else if (day === 3) {
            console.log(days[2]);
        } else if (day === 4) {
            console.log(days[3]);
        } else if (day === 5) {
            console.log(days[4]);
        } else if (day === 6) {
            console.log(days[5]);
        } else if (day === 6) {
            console.log(days[6]);
        }
    } else {
        console.log("Invalid day!");
    }
}
dayOfWeek(1)