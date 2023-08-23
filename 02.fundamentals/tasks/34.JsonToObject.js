function jsonToObject(firstName, lastName, hairColor) {

    let people = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    let string =  JSON.stringify(people);

    console.log(string);
}

jsonToObject('George', 'Jones', 'Brown');