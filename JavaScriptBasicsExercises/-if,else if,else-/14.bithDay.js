function birthDay(input){
    let taxs = Number(input);
    
    let cake = 20 / 100;
    let drinks = 45 / 100;
    let animator = 3;

    let priceForaCake = taxs * cake;
    let priceForaDrinks = priceForaCake - (priceForaCake * drinks);
    let priceForaAnimator = (taxs / animator)

    let neededMoney = taxs + priceForaCake + priceForaDrinks + priceForaAnimator;
    console.log(neededMoney);
} 

birthDay(["2250"]);
birthDay(["3720"]);