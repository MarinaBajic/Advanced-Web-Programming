// Describing functions with function type exppressions
function greet(fn) {
    fn("Mario");
}
// Describing functions with function type declarations
function printToConsole(s) {
    console.log("Hello ".concat(s.toUpperCase(), "!"));
}
// Calling functions
greet(printToConsole);
// Generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
