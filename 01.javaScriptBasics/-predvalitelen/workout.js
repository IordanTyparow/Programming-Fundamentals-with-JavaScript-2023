
function calculator(input) {

    let nameSerial = input[0];
    let countSerial = Number(input[1]);
    let countEpizodes = Number(input[2]);
    let time = Number(input[3]);
    
    let oneTimeFilm = time * 0.20;
    let timeEpisodeWithRek = time + oneTimeFilm;
    let specialEpisode = countSerial * 10;
    
    let totalTime = (timeEpisodeWithRek * countEpizodes * countSerial) + specialEpisode;

    console.log(`Total time needed to watch the ${nameSerial} series is ${Math.floor(totalTime)} minutes.`);
}
calculator(["Lucifer", "3", "18", "55"]);


