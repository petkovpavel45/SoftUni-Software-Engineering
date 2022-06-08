function maxSequenceOfEqualEle(array) {
    let arrayToPrint = [];
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray = [];

        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                newArray.push(array[j]);
            } else {
                break;
            }
            if (newArray.length > arrayToPrint.length) {
                arrayToPrint = newArray;
            }
        }
    }
    console.log(arrayToPrint.join(" "));
}
maxSequenceOfEqualEle([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])