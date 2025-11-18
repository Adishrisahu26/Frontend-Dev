const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

let valid = [];
let invalid = [];

for (let t of transactions) {
  try {
    if (t === null) throw "Null Entry";
    if (!t.id || t.amount === undefined) throw "Missing Fields";
    if (t.amount < 0) throw "Negative Amount";

    valid.push(t);
  } catch (e) {
    invalid.push({ entry: t, error: e });
  }
}

console.log("Valid:", valid);
console.log("Invalid:", invalid);
