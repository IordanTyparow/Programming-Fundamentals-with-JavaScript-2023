function solution(number) {
    return function (c) {
        return number + c;
    }
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
