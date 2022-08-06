function computerStore(input) {
    let index = 0;
    let command = input[index];
    index++;
    let money = 0;

    while (command !== 'special' && command !== 'regular') {
        let parts = Number(command);
        if (parts < 0) {
            console.log('Invalid price!');
            command = input[index];
            index++;
            continue;
        }
        money += parts;
        command = input[index];
        index++;
    }
    let taxes = money * 0.2;
    let totalAmount = money + taxes;
    if (command === 'special') {
        totalAmount *= 0.90;
    }
    if (totalAmount > 0) {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${money.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalAmount.toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }
}
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])