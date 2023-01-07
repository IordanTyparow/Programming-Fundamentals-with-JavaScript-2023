function solve(commands) {


    let arr = commands.shift()
        .split(' ')
        .map(Number);

    for (let index = 0; index < commands.length; index++) {
        let [command, firstElement, secondElement]
            = commands[index].split(' ');

        firstElement = Number(firstElement);
        secondElement = Number(secondElement);

        switch (command) {
            case 'Add': add(firstElement); break;
            case 'Remove': remove(firstElement); break;
            case 'RemoveAt': removeAt(firstElement); break;
            case 'Insert': insert(firstElement, secondElement); break;
        }

        function add(el) {
            arr.push(el);
        }
        function remove(num) {
            arr = arr.filter(el => el !== num);
        }
        function removeAt(index) {
            arr.splice(index, 1);
        }
        function insert(num, index) {
            arr.splice(index, 0, num);
        }
    }
    console.log(arr.join(' '));
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);