function negativeOrPositiveNumbers(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let curNumber = array[i];
        if(curNumber < 0) {
            newArray.unshift(curNumber);
        }else {
            newArray.push(curNumber);
        }
    }
    console.log(newArray.join("\n"));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])