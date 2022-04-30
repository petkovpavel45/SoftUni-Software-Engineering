function multiplicationTable() {
    for(let i = 1; i <= 10; i++){
        for(j = 1; j <= 10; j++){
            let res = i * j;
            console.log(`${i} * ${j} = ${res}`);
        }
    }
}
multiplicationTable()