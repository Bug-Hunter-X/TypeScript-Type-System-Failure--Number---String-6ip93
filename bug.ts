function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, '10'); // Type error not caught by compiler
console.log(result); // NaN