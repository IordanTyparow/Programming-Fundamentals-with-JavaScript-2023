function cat(input){
    let minutesInaDay = Number(input[0]);
    let countWalking = Number(input[1]);
    let calorieForDay = Number(input[2]);

    let allCountMinutes = countWalking * minutesInaDay;
    let calorieGone = allCountMinutes * 5;

    let takedCaloriesForaDay = (calorieForDay * 50) / 100;

    if(calorieGone >= takedCaloriesForaDay){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${calorieGone}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${calorieGone}.`);
    }
   
}

cat(["30", "3", "600"]);
cat(["15", "2", "500"]);