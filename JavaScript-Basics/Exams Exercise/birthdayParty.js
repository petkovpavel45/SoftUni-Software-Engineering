function birthdayParty (input){
  let rent = Number(input);

  let priceCake = rent * 0.2;
  let priceDrinks = priceCake - (priceCake * 0.45);
  let animator = rent / 3;
  let needBudget = rent + priceCake + priceDrinks + animator;

  console.log(needBudget)
}
birthdayParty(3720)