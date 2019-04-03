/* This lesson is my implementation of 'Learn TypeScript in Y Minutes"
** The lesson can be found at: https://learnxinyminutes.com/docs/typescript/
** Notes written by Antonio Baccus
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Quick Aside => What the fuck is an interface in this context? And enumerations? And what the fuck is a first class citizen?!? Oh well, let's keep going..
// Classes - members are public by default
var Point = /** @class */ (function () {
    // Constructor - the public / private keywords in this context will generate the boiler plate code for the property and the initializations in the constructor
    // In this example, 'y' wil l be defined just like 'x' is, but with less code
    function Point(x, y) {
        if (y === void 0) { y = 0; }
        this.y = y;
        this.x = x;
    }
    // Functions
    Point.prototype.dist = function () { return Math.sqrt(this.x * this.y + this.y * this.y); };
    // Static members
    Point.origin = new Point(0, 0);
    return Point;
}());
// Classes can be explicitly marked as implementing an interface
// Any missing properties will then cause an error at compile-time.
var PointPerson = /** @class */ (function () {
    function PointPerson() {
    }
    PointPerson.prototype.move = function () { };
    return PointPerson;
}());
var p1 = new Point(10, 20);
var p2 = new Point(25); // y will be 0
// Inheritance
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.dist = function () {
        var d = _super.prototype.dist.call(this);
        return Math.sqrt(d * d + this.z * this.z);
    };
    return Point3D;
}(Point));
// Modules '.' can be used as separator for sub modules
var Geometry;
(function (Geometry) {
    var Square = /** @class */ (function () {
        function Square(sideLength) {
            if (sideLength === void 0) { sideLength = 0; }
            this.sideLength = sideLength;
        }
        Square.prototype.area = function () {
            return Math.pow(this.sideLength, 2);
        };
        return Square;
    }());
    Geometry.Square = Square;
})(Geometry || (Geometry = {}));
var s1 = new Geometry.Square(5);
// Local alias for referencing a module
var G = Geometry;
var s2 = new G.Square(10);
// Generics
// Classes
var Tuple = /** @class */ (function () {
    function Tuple(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    return Tuple;
}());
// And functions
var pairToTuple = function (p) {
    return new Tuple(p.item1, p.item2);
};
var tuple = pairToTuple({ item1: "hello", item2: "world" });
// Including references to a definition file:
// <reference path="jquery.d.ts" />
// Template Strings (strings that use backticks)
// String Interpolation with Template Strings
var kingName = 'Tyrone';
var greeting = "Hi " + kingName + ", how are you?";
// Multiline Strings with Template Strings
var multiline = "This is an example\nof a multiline string";
// READONLY: New Feature in TypeScript 3.1
// interface Person {
//    readonly name: string;
//    readonly age: number;
// }
// var p1: Person = { name: "Tyrone", age: 42 };
// p1.age = 25; // Error, p1.x is read-only
// var p2 = { name: "John", age: 60 };
// var p3: Person = p2; // Ok, read-only alias for p2
// p3.age = 35; // Error, p3.age is read-only
// p2.age = 45; // Ok, but also changes p3.age because of aliasing
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2018;
        this.make = "Unknown Make"; // Assignment permitted in constructor
        this.model = "Unknown Model"; // Assignment permitted in constructor
    }
    return Car;
}());
var numbers = [0, 1, 2, 3, 4];
var moreNumbers = numbers;
// moreNumbers[5] = 5; // Error, elements are read-only
// moreNumbers.push(5); // Error, no push method (because it mutates array)
// moreNumbers.length = 3; // Error, length is read-only
// numbers = moreNumbers; // Error, mutating methods are missing
