function movie(input) {

    let timeForPhotos = Number(input[0]);
    let countScenes = Number(input[1]);
    let timeForScenes = Number(input[2]);
    
    let minutes = timeForPhotos * 0.15;
    let timeForVideo = countScenes * timeForScenes; 

    let neededTime = minutes + timeForVideo;

    if (timeForPhotos >= neededTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(timeForPhotos - neededTime)} minutes left!`);
    } else {
        let diff = neededTime - timeForPhotos;
        console.log(`Time is up! To complete the movie you need ${diff} minutes.`);
    }
}

movie(["135",
"5",
"20"])

