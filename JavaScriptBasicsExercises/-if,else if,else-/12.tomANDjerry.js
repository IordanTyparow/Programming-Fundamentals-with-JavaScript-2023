function cat(input){
    let rest = Number(input[0]);
    
    let restDays = rest * 127;
    let worksDays = (365 - rest) * 63;
    let totalTime = restDays + worksDays;

    let leftTime = Math.abs(totalTime - 30000);
    let hours = Math.floor(leftTime / 60);
    let minutes = leftTime % 60;

    if (totalTime > 30000) {
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else if (totalTime <= 30000) {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    } 
}
cat(["20"]);