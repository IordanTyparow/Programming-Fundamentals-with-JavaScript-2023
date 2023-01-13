function songs(array) {
    
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = [];
    let loops = array.shift();
    let command = array.pop();


    for (let index = 0; index < loops; index++) {

        let [type, name, time] = array[index].split('_'); 
        
        let song = new Song(type, name, time);
        songsCount.push(song);
    }

    if (command === 'all') {
        songsCount.forEach((i) => console.log(i.name));
    } else {
        let filtered = songsCount.filter((i) => i.type === command);
        filtered.forEach((i) => console.log(i.name));
    }
}

songs([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite']);