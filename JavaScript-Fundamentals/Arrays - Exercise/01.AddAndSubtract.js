function addAndSubtract(array) {
    let newArray = array;
    let sumOriginalArray = 0;
    let sumModifiedArray = 0;

    for(let i = 0; i < newArray.length; i++) {
        sumOriginalArray += newArray[i];
        
        if(newArray[i] % 2 === 0){
            newArray[i] += i;
        } else {
            newArray[i] -= i;
        }
        sumModifiedArray += newArray[i];
    }
    console.log(newArray);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}
addAndSubtract([5, 15, 23, 56, 35])