function sumFirstAndLast(array) {
    let first = Number(array.shift());
    let last = Number(array.pop());
    console.log(first + last);
}
sumFirstAndLast(['20', '30', '40'])