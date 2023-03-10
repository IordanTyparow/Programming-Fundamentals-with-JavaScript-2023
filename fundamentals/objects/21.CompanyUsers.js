function companuUsers(input) {

    let users = {};

    input.forEach(element => {
        let [user, id] = element.split(' -> ');

        if (!users.hasOwnProperty(user)) {
            users[user] = [];
        }
        if (!users[user].includes(id)) {
            users[user].push(id);
        }
    });

    let sorted = Object.entries(users).sort((a,b) => a[0].localeCompare(b[0]));

    for (const [key, value] of sorted) {
        console.log(`${key}`);
        value.forEach(id => console.log(`-- ${id}`));
    }
}

companuUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);