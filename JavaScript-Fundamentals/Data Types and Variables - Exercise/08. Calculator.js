function calculator(number1, operator, number2) {
    if(operator === "+"){
        console.log((number1 + number2).toFixed(2));
    } else if(operator === "-"){
        console.log((number1 - number2).toFixed(2));
    }else if(operator === "/"){
        console.log((number1 / number2).toFixed(2));
    }else if(operator === "*"){
        console.log((number1 * number2).toFixed(2));
    }
}
calculator(5, '+', 10)
calculator(25.5, '-', 3)