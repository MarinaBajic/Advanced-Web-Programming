// Declaring a variable with a type
let myString: string;

// Compilation error, when assigning a number to a string variable
// myString = 4; 
// Notice that even though we will get compitaltion error in compiled
// JS file this line will be present, because this is still valid JS code

// Assigning a string to a variable which will infer the type
let anotherString = 'This is infered string';

// Declaring new variable without type (so type will be any)
let yetAnotherString;
yetAnotherString = 'This is a string';
yetAnotherString = 5; // this works because type is any

// Basic types
let aString: string = 'This is a string';
let aNumber: number = 5;
let aBoolean: boolean = true;
let aList: number[] = [1, 2, 3];
let anArray: Array<string> = ["a", "b", "c"];
let anything: any;
let tuple: [number, string] = [10, "a"];
enum Color {
    Red, Yellow, Green
}

// Union types
let union: number | string = 5;
union = 'a';
// union = true; // compilation error

let c: Color = Color.Green
// not much else we can assing to these types
let u: undefined = undefined;
let n: null = null;

// Type assertions
let aLen: number = (aString as string).length
// let bLen: number = (<string>anArray).length
// type assertions does not affect the runtime behaviur of code




