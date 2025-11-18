const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let item of apiData) {
  let num = Number(item);
  if (!isNaN(num) && item !== " " && item !== "100px") {
    validNumbers.push(num);
  } else {
    invalidNumbers.push(item);
  }
}

console.log("Valid:", validNumbers);
console.log("Invalid:", invalidNumbers);

for (let item of apiData) {
  console.log({
    original: item,
    number: Number(item),
    boolean: Boolean(item),
    string: String(item)
  });
}
