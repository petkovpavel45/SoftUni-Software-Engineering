function concatenateData(input){
    let fistName = (input[0]);
    let lastName = (input[1]);
    let age = (input[2]);
    let town = (input[3]);

    console.log(`You are ${fistName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData(["Pavel", "Petkov", 24, "Razgrad"])