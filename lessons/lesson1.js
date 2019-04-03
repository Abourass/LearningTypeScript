// There are three basic types in TypeScript
var isDone = false;
var lines = 42;
var username = 'Anders';
//But you can omit the type annotation if the variables are derived from explicit literals
var hasStarted = true;
var meaningOfLife = 42;
var familyName = 'Baccus';
// When it's impossible to know, there is the 'Any' type
var notSure = 4;
notSure = "Maybe a string now?";
notSure = false; // okay okay, boolean
// trying to over write constants will cause a error on compilation
var numLives = 9;
// if I were to now write :
// numLives = 1;
// I'd get an error
// For collections, there are typed arrays
var list = [1, 2, 3];
// and generic arrays
var genList = [1, 2, 3];
// For enumerations:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// Lastly, "void" is used in the special case of a function returning nothing
function bigHorribleAlert() {
    alert("I'm annoying!");
}
// Functions are first class citizens, they support the lambda "fat arrow" syntax and use type inference
// The following are all equivalent, the same signature will be inferred by the compiler, and the same JS will be emitted
var f1 = function (i) { return i * i; };
// Return type inferred
var f2 = function (i) { return i * i; };
// Fat arrows!
var f3 = function (i) { return i * i; };
// Fat arrows + return type inference
var f4 = function (i) { return i * i; };
// Fat arrows + return type inference, braceless means no return keyword needed
var f5 = function (i) { return i * i; };
// Object that implements the "Person" interface can be treated as a Person since it has the name and move properties
var p = { name: "Bobby", move: function () { } };
// Objects that have the optional property:
var validPerson = { name: "Bobby", age: 42, move: function () { } };
// Is not a person because age is not a number
var invalidPerson = { name: "Bobby", age: /* true - causes said issue */ 45, move: function () { } }; // Holy shit just writing this pissed web storm off so much
// Only the parameters' types are important, names are not important.
var mySearch;
mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
