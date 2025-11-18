let currentSalary = 40000;
let incrementRate = 10; 

console.log("Yearly Salary Projection:");

for (let year = 1; year <= 5; year++) {
  currentSalary += currentSalary * (incrementRate / 100);
  console.log(`Year ${year}: ₹${currentSalary.toFixed(2)}`);
}
