function sequence2kAdd1(input) {
    let n = Number(input[0]);
    let counter = 1;

    while(counter <= n) {
        console.log(counter);
        counter = 2 * counter + 1;
    }
}
sequence2kAdd1(["3"])