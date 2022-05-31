function reversedChars(char1, char2, char3) {
    let sum = char1 + char2 + char3;
    sum = sum.split("").reverse().join(" ");
    console.log(sum);  
}
reversedChars("A", "B", "C")