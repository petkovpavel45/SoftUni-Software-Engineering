function binaryToDecimal(binaryNum) {
    let binaryAsString = String(binaryNum);
    let decimal = parseInt(binaryAsString, 2);
    console.log(decimal);
}
binaryToDecimal("00001001")