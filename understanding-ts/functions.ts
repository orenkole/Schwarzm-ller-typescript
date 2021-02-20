function returnVoid(): void {
  console.log(2 + 3);
}

function returnUndefined(): undefined {
  return;
}

function add(n1: number, n2: number): number {
  return n1 + n2;
}
let combineValues: (a: number, b: number) => number;
combineValues = add;

// combineValues = 2; error


/// 28. Function Types & Callbacks

function printResult(num: number): void {
  console.log(`Result: ${num}`);
}
function addAndHandle(
  n1: number,
  n2: number,
  cb: (num: number) => void
) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(
  2,
  3,
  (result) => {console.log(result);}
);
