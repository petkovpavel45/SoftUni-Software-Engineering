function englishNameOfTheLastDigit(number) {
    let array = number.toString().split("");
    let newNumAsString = array.pop();
    let newNum = Number(newNumAsString);
    if (newNum === 0) {
        console.log("zero");
    } else if (newNum === 1) {
        console.log("one");
    } else if (newNum === 2) {
        console.log("two");
    } else if (newNum === 3) {
        console.log("three");
    } else if (newNum === 4) {
        console.log("four");
    } else if (newNum === 5) {
        console.log("five");
    } else if (newNum === 6) {
        console.log("six");
    } else if (newNum === 7) {
        console.log("seven");
    } else if (newNum === 8) {
        console.log("eight");
    } else if (newNum === 9) {
        console.log("nine");
    } else {
        console.log("ten");
    }
}
englishNameOfTheLastDigit(1640)