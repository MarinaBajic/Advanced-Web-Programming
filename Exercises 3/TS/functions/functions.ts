
// Describing functions with function type exppressions
function greet(fn: (a: string) => void) {
    fn("Mario")
}

// Describing functions with function type declarations
function printToConsole(s: string) {
    console.log(`Hello ${s.toUpperCase()}!`)
}

// Calling functions
greet(printToConsole)
  
// Generic functions
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))

