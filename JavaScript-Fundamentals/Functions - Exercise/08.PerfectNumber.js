function perfectNumber(number) {
    function findPositiveDivisors(num) {
        let dividors = [];
        for (let i = 1; i < num; i++) {
            if(num % i === 0) {
                dividors.push(i)
            }
        }
        return dividors;
    }
    let arrOff = findPositiveDivisors(number);

    function sumDiv (num) {
        let sum = 0;
        for (let iterator of num) {
            sum += iterator;
        }
        return sum;
    }

    function isPerfect(num) {
        if(sumDiv(arrOff) === num) {
            return "We have a perfect number!"
        } else {
            return "It's not so perfect."
        }
    }
    console.log(isPerfect(number));
}
perfectNumber(28)