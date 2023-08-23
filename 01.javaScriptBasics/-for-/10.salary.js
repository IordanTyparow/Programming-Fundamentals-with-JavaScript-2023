function salary(input) {

    let openTabs = Number(input[0]);
    let buget = Number(input[1]);

    for (let i = 2; i <= input.length; i++) {
        let open = input[i];
        switch(open) {
            case "Facebook": buget -= 150; break;
            case "Instagram": buget -= 100; break;
            case "Reddit": buget -= 50; break;       
        }
        if (buget <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (buget > 0) {
        console.log(Math.floor(buget));
    }
    
}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


