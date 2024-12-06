function add(a: number, b: number): number {
  return a + b;
}

//Using Type Assertion to explicitly specify the data type
let result = add(1, <number>"2"); 

// Or using Number() constructor to convert the string to a number
let result2 = add(1, Number("2"));