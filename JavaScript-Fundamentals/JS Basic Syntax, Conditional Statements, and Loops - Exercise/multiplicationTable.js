function multiplicationTable(num) {
    for(let i = num; i <= num; i++) {
        for(let j = 1; j <= 10; j++) {
            let res = num * j;
            console.log(`${num} X ${j} = ${res}`);
        }
    }
}
multiplicationTable(2)