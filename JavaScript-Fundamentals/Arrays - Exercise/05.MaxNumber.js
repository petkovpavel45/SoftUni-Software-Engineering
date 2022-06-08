function maxNumber(array) {
    let largest = [];
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let isBig = true;
        for (let j = i + 1; j < array.length; j++) {
            let next = array[j];
            if (current <= next) {
                isBig = false;
                break;
            }
        }
        if (isBig) {
            largest.push(current);
        }
    }
    console.log(largest.join(" "));
}
maxNumber([1, 4, 3, 2])