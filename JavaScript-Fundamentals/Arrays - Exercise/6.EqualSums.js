function equalSums(array) {
    let hasEquals = false;
    for (let i = 0; i < array.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += array[j];
        }
        for (let num = i + 1; num < array.length; num++) {
            rightSum += array[num];
        }
        if(leftSum === rightSum) {
            console.log(i);
            hasEquals = true;
        }
    }
    if(!hasEquals) {
        console.log("no");
    }
}
equalSums([1, 2, 3, 3])