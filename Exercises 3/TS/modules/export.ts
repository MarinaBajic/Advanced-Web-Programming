// Example module which exports different element of ts code

// Exporting variables
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

// Exporting classes
export class RandomNumberGenerator {}

// Exporting functions
export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}