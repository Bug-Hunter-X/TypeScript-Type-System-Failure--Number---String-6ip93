# TypeScript Type System Failure: Number + String

This example demonstrates a subtle issue in TypeScript's type system where type errors aren't always caught during compilation. Specifically, it shows that while functions have type annotations, the compiler doesn't always strictly enforce them when dealing with type coercion. 

## The Problem
The `add` function is annotated to accept two numbers and return a number. However, when a string is passed as an argument, TypeScript doesn't raise an error during compilation.  Instead, the addition results in `NaN` at runtime.

## How to Reproduce
1.  Clone this repository.
2.  Compile and run `bug.ts`.
3. Observe the NaN output. 

## The Solution
The proposed solution involves using a stricter type guard to ensure that the function only accepts numbers. This will prevent the type coercion issue and make the code more robust.