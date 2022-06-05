function sumFirstAndLastArrayElements(input) {
    let first = input.shift();
    let last = input.pop();
    console.log(Number(first + last));
}
sumFirstAndLastArrayElements([10, 17, 22, 33])