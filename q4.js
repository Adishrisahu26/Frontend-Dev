let marks = [78, 85, 92, 67, 80]; 


let anyFail = marks.some(m => m < 35);
let total = marks.reduce((sum, val) => sum + val, 0);
let percentage = (total / (marks.length * 100)) * 100;

if (anyFail) {
  console.log("Detained (Failed in one or more subjects)");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
} else {
  console.log("Detained");
}

console.log("Percentage:", percentage.toFixed(2) + "%");
