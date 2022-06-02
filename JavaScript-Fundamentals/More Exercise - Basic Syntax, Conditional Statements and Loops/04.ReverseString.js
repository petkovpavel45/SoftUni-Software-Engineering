function reverseString(input){
    let inputAsString = String(input);
    let stringReveresed = inputAsString.split("").reverse().join("");
    console.log(stringReveresed);
}
reverseString(1234)