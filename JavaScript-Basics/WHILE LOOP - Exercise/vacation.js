function vacation(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let totalDays = 0;
    let totalSpendDays = 0;

    while(money < needMoney){
        let command = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;
        totalDays++;

        switch(command){
            case "save":
                 money += tempMoney;
                 totalSpendDays = 0;
                 break;
            case "spend":
                money -= tempMoney
                totalSpendDays++;
                if(money < 0) {
                    money = 0;
                }

        }
        if(totalSpendDays === 5){
            console.log(`You can't save the money.`);
            console.log(totalDays);
            break;
        }
    }
    if(money >= needMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
