function lunchBreak(input) {
    let nameMovie = input[0];
    let epizodeStart = Number(input[1]);
    let breakStart = Number(input[2]);

    let timeForlunch = breakStart / 8; // 12
    let timeForBreak = breakStart / 4; // 24
    let leftTime = breakStart - timeForlunch - timeForBreak; // 60

    if (leftTime >= epizodeStart){
        let diff = leftTime - epizodeStart;
        console.log(`You have enough time to watch ${nameMovie} and left with ${Math.ceil(diff)} minutes free time.`);
    }
    if (leftTime < epizodeStart){
        let diff = epizodeStart - leftTime;
        console.log(`You don't have enough time to watch ${nameMovie}, you need ${Math.ceil(diff)} more minutes.`)
    }

}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
