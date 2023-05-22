class List {
    constructor() {
        this.array = [];
        this.size = this.array.length;
    }

    add(value) {
        this.array.push(value);
        this.size += 1;
        this.array.sort((a, b) => a - b);
    }
    remove(index) {
        if (index < 0 || index >= this.array.length) {
            throw new Error('Invalid index!');
        } else {
            this.array.splice(index, 1);
            this.size -= 1;
        }
    }
    get(index) {
        return this.array[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)