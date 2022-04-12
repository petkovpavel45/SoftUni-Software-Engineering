function depositCalculator (input){
    let deposit = Number(input[0]);
    let termDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let interestForOneYear = deposit * (annualInterestRate / 100);
    let interestForOneMonth = interestForOneYear / 12;
    let fullPrice = deposit + termDeposit * interestForOneMonth;
    console.log(fullPrice);
}
depositCalculator(["200", "3", "5.7"])