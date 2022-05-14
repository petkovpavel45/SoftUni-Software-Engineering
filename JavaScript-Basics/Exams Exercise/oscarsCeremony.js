function oscarsCeremony(input){
    let rent = Number(input[0]);
    let statuets = rent - (rent * 0.3);
    let catering = statuets - (statuets * 0.15);
    let music = catering / 2;
    let needBudget = rent + statuets + catering + music;


    console.log(needBudget.toFixed(2))
}
oscarsCeremony(["3500"])