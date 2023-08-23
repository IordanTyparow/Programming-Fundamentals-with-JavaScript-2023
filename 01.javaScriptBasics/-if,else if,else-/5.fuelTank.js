function solve(input){
    let typeFuel = input[0];
    let fuel = input[1];

   let appleFuel = ["Diesel", "Gasoline", "Gas"];
   let chekedFuel = appleFuel.includes(`${typeFuel}`);

   if (chekedFuel == false){
    console.log("Invalid fuel!");
   } else if (fuel >= 25){
    console.log(`You have enough ${typeFuel.toLowerCase()}.`)
   } else {
    console.log(`Fill your tank with ${typeFuel.toLowerCase()}!`)
   }
}

solve(["Diesel", "10"]);
solve(["Gasoline", "40"]);
solve(["Gas", "25"]);
solve(["Kerosene", "200"]);