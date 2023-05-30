class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayer) {
        for (const tokens of footballPlayer) {
            let name = tokens.split('/')[0];
            let age = Number(tokens.split('/')[1]);
            let playerValue = Number(tokens.split('/')[2]);

            let findPlayer = this.invitedPlayers.find(x => x.name === name);

            if (findPlayer) {
                if (findPlayer.playerValue < playerValue) {
                    findPlayer.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
            }
        }

        let result = [];

        this.invitedPlayers.forEach(name => result.push(name.name));

        return `You successfully invite ${result.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        let currentPlayer = this.invitedPlayers.find(x => x.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (playerOffer < currentPlayer.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${Math.abs(playerOffer - currentPlayer.playerValue)} million more are needed to sign the contract!`);
        }

        currentPlayer.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let currentPlayer = this.invitedPlayers.find(x => x.name === name);

        if (currentPlayer) {
            if (currentPlayer.age > age) {
                return `${name} is above age limit!`;
            } else if (currentPlayer.age < (age + 5)) {
                let ageDifference = age - currentPlayer.age;
                if (ageDifference < 5 && ageDifference > 0) {
                    return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
                } else {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                }
            }
        } else {
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    transferWindowResult() {
        let result = [];

        result.push('Players list:');

        this.invitedPlayers.forEach(player => result.push(`Player ${player.name}-${player.playerValue}`));

        return result.join('\n');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


