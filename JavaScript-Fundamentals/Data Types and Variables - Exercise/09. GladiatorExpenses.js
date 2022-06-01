function gladiatorExpenses(losts, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    for (let tempFight = 1; tempFight <= losts; tempFight++) {
        if (tempFight % 2 === 0) {
            expenses += helmetPrice;
        }
        if (tempFight % 3 === 0) {
            expenses += swordPrice;
        }
        if (tempFight % 6 === 0) {
            expenses += shieldPrice;
        }
        if (tempFight % 12 === 0) {
            expenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
)