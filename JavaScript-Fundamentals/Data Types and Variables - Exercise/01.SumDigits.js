function sumDigits(num) {
    num = num.toString();
    let res = 0;

    for (let i = 0; i < num.length; i++) {
        res += Number(num[i]);
    }
    console.log(res);
}
sumDigits(5532)