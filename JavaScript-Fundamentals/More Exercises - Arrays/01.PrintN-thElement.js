function printNthElement(input) {
    let step = input.pop();
    let newArray = [];
    for (let i = 0; i < input.length; i += Number(step)) {
        newArray.push(input[i]);
    
    }
    console.log(newArray.join(" "));
}
printNthElement(['5', '20', '31', '4', '20', '6'])