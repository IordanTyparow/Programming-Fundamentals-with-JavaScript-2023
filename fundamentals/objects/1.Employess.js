function employess(input) {

    let employess = {};

    input.forEach(person => {
        employess[person] = person.length;
    });

    for (const key in employess) {
       console.log(`Name: ${key} -- Personal Number: ${employess[key]}`);
    }
}

employess([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);