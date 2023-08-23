function divisible(input) {

    let first = Number(input[0]);
    let second = Number(input[1]);

    let summ = 0;
    let number = ""; 

    for ( let i = first ; i <= second ; i++) {
        if ( i % 9 == 0 ) {
            summ += i;
            number += i + "\n";
        }
    }
    console.log("The sum: " + summ);
    console.log(number);
  
}

divisible([ "100", "200" ]);