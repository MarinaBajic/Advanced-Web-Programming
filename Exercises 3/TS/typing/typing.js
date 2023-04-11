// Declaring a variable with a type
var myString;
// Compilation error, when assigning a number to a string variable
// myString = 4; 
// Notice that even though we will get compitaltion error in compiled
// JS file this line will be present, because this is still valid JS code
// Assigning a string to a variable which will infer the type
var anotherString = 'This is infered string';
// Declaring new variable without type (so type will be any)
var yetAnotherString;
yetAnotherString = 'This is a string';
yetAnotherString = 5; // This works because type is any
// Basic types
var aString = 'This is a string';
var aNumber = 5;
var aBoolean = true;
var aList = [1, 2, 3];
var anArray = ["a", "b", "c"];
var anything;
var tuple = [10, "a"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var c = Color.Green;
// Not much else we can assing to these types
var u = undefined;
var n = null;
// Type assertions
var aLen = aString.length;
var bLen = anArray.length;
