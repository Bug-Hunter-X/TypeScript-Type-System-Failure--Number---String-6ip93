function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Arguments must be numbers');
  }
  return a + b;
}

// Stricter Type Guard
let result = add(5, 10);  // Correct usage
console.log(result); //15

// Attempt to use incorrect type will now throw error
//let result2 = add(5, '10'); // Throws an error