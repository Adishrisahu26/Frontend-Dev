let expenses = [5000, 1200, 8000, 2000, 1500]; 


let total = expenses.reduce((sum, val) => sum + val, 0);
let avg = total / expenses.length;

let finalAmount = total + (total * 0.10);   

console.log("Total:", total.toFixed(2));
console.log("Average:", avg.toFixed(2));
console.log("Final Amount (after 10% tax):", finalAmount.toFixed(2));
