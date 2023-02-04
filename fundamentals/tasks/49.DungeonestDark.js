function dungeonestDark(input) {

    let rooms = input.shift().split('|');
    let health = 100;
    let bestRoom = 0;
    let alive = true;
    let totalCoins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let command = rooms[i].split(' ');

        let options = command[0];
        let healthOrAttack = Number(command[1]);

        bestRoom++;

        if (options === 'potion') {
            if (health + healthOrAttack > 100) {
                healthOrAttack = 100 - health;
                health = 100;
            } else {
                health += healthOrAttack;
            }
            console.log(`You healed for ${healthOrAttack} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (options === 'chest') {
            totalCoins += healthOrAttack;
            console.log(`You found ${healthOrAttack} coins.`);
        } else {
            health -= healthOrAttack;
            if (health > 0) {
                console.log(`You slayed ${options}.`);
            } else if (health <= 0) {
                console.log(`You died! Killed by ${options}.`);
                console.log(`Best room: ${bestRoom}`);
                alive = false;
                break;
            }
        }
    }
    if (alive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${totalCoins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);