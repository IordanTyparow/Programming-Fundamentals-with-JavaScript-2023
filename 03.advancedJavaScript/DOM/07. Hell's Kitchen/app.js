function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputs = JSON.parse(document.querySelector('#inputs textarea').value);
      let restorants = {};
      let totalSalary = 0;
      let bestName = '';
      let avg = 0;
      let bestSalary = 0;
      let curAverageSalary = 0;

      for (let line of inputs) {
         let restorauntInfo = line.split(' - ');
         let restourantName =  restorauntInfo.shift();
         let workersData = restorauntInfo[0].split(', ');

         for (const worker of workersData) {
            let [name, salary] = worker.split(' ');
            
            if (!restorants.hasOwnProperty(restourantName)) {
               restorants[restourantName] = {};
            }
            if (restorants.hasOwnProperty(restourantName)) {
               restorants[restourantName][name] = Number(salary);
            }
         }
      }
      
      let entries = Object.entries(restorants);

      for (const entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for (const [name, salary] of values) {
            totalSalary += salary;
         }

         avg = totalSalary / values.length;

         if (avg > curAverageSalary) {
            curAverageSalary = avg;
            bestName = key;
            totalSalary = 0;
         }
      }

      let result = Object.entries(restorants[bestName]).sort((a,b) => b[1] - a[1]);
      let print = '';

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
      console.log(print);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${curAverageSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
   }
}
