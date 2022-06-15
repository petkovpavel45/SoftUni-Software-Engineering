function nxNMatrix(num) {
    let array = [];
    for(let i = 0; i < num; i++){
        array.push([]);
        for(let j = 0; j < num; j++){
            array[i][j] = num;
        }
    }
    for (let iterator of array) {
        console.log(iterator.join(' '));
    }
}
nxNMatrix(3)