function easterEggs(input) {

    let countEggs = Number(input[0]);

    let redPaint = 0;
    let orangePaint = 0;
    let bluePaint = 0;
    let greenPaint = 0;

    for (let i = 1; i <= countEggs; i++) {
        let paint = input[i];

        switch (paint) {
            case "red": redPaint++; break; 
            case "orange": orangePaint++; break;
            case "blue": bluePaint++; break;
            case "green": greenPaint++; break;   
        }
    }

    let maxEggsCount = redPaint;
    let colors = "red";

    if (orangePaint > maxEggsCount) {
        maxEggsCount = orangePaint;
        colors = "orange";
    }
    if (bluePaint > maxEggsCount) {
        maxEggsCount = bluePaint;
        colors = "blue";
    }
    if (greenPaint > maxEggsCount) {
        maxEggsCount = greenPaint;
        colors = "green";
    }

    console.log(`Red eggs: ${redPaint}`);
    console.log(`Orange eggs: ${orangePaint}`);
    console.log(`Blue eggs: ${bluePaint}`);
    console.log(`Green eggs: ${greenPaint}`);
    console.log(`Max eggs: ${maxEggsCount} -> ${colors}`);
}

easterEggs(["4",
"blue",
"red",
"blue",
"orange"]) 

