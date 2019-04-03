/* This lesson is my implementation of 'Learn TypeScript in Y Minutes"
** The lesson can be found at: https://learnxinyminutes.com/docs/typescript/
** Notes written by Antonio Baccus
*/

// There are three basic types in TypeScript
let isDone: boolean = false;
let lines: number = 42;
let username: string = 'Anders';

//But you can omit the type annotation if the variables are derived from explicit literals
let hasStarted = true;
let meaningOfLife = 42;
let familyName = 'Baccus';

// When it's impossible to know, there is the 'Any' type
let notSure: any = 4;
notSure = "Maybe a string now?";
notSure = false; // okay okay, boolean

// trying to over write constants will cause a error on compilation
const numLives = 9;
// if I were to now write :
// numLives = 1;
// I'd get an error

// For collections, there are typed arrays
let list: number[] = [1, 2, 3];
// and generic arrays
let genList: Array<number> = [1, 2, 3];

// For enumerations:
enum Color { Red, Green, Blue};
let c: Color = Color.Green;

// Lastly, "void" is used in the special case of a function returning nothing
function bigHorribleAlert(): void {
    alert("I'm annoying!");
}

// Functions are first class citizens, they support the lambda "fat arrow" syntax and use type inference
// The following are all equivalent, the same signature will be inferred by the compiler, and the same JS will be emitted
let f1 = function (i: number): number { return i * i };
// Return type inferred
let f2 = function (i: number) { return i * i };
// Fat arrows!
let f3 = (i: number): number => { return  i * i };
// Fat arrows + return type inference
let f4 = (i: number) => { return i * i };
// Fat arrows + return type inference, braceless means no return keyword needed
let f5 = (i: number) => i * i;

// Interfaces? are structural, anything that has the properties is compliant with the interface
interface Person {
    name: string;
    // Optional properties must be marked with a '?'
    age?: number;
    // And of course functions
    move(): void;
}

// Object that implements the "Person" interface can be treated as a Person since it has the name and move properties
let p: Person = { name: "Bobby", move: () => { } };
// Objects that have the optional property:
let validPerson: Person = { name: "Bobby", age: 42, move: () => { } };
// Is not a person because age is not a number
let invalidPerson: Person = { name: "Bobby", age: /* true - causes said issue */ 45, move: () => { } }; // Holy shit just writing this pissed web storm off so much

// Interfaces can also describe a function type
interface SearchFunc {
    (source: string, subString: string ): boolean;
}
// Only the parameters' types are important, names are not important.
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
    return src.search(sub) != -1;
};

// Quick Aside => What the fuck is an interface in this context? And enumerations? And what the fuck is a first class citizen?!? Oh well, let's keep going..
// Classes - members are public by default
class Point {
    // Properties
    x: number;

    // Constructor - the public / private keywords in this context will generate the boiler plate code for the property and the initializations in the constructor
    // In this example, 'y' wil l be defined just like 'x' is, but with less code
    constructor(x: number, public y: number = 0) {
        this.x = x;
    }
    // Functions
    dist() { return Math.sqrt(this.x * this.y + this.y * this.y); }
    // Static members
    static origin = new Point(0, 0);
}

// Classes can be explicitly marked as implementing an interface
// Any missing properties will then cause an error at compile-time.
class PointPerson implements Person {
    name: string;
    move() {}
}

let p1 = new Point(10, 20);
let p2 = new Point(25); // y will be 0

// Inheritance
class Point3D extends Point {
    constructor(x: number, y: number, public z: number = 0) {
        super(x, y);
    }

    dist() {
        let d = super.dist();
        return Math.sqrt( d * d + this.z * this.z );
    }
}

// Modules '.' can be used as separator for sub modules
module Geometry {
    export class Square {
        constructor(public sideLength: number = 0) {
        }
        area() {
            return Math.pow(this.sideLength, 2);
        }
    }
}

let s1 = new Geometry.Square(5);

// Local alias for referencing a module
import G = Geometry;

let s2 = new G.Square(10);

// Generics
// Classes
class Tuple<T1, T2> {
    constructor(public item1: T1, public item2: T2) {
    }
}

// Interfaces
interface Pair<T> {
    item1: T;
    item2: T;
}

// And functions
let pairToTuple = function <T>(p: Pair<T>) {
    return new Tuple(p.item1, p.item2);
};

let tuple = pairToTuple({item1: "hello", item2: "world" });
// Including references to a definition file:
// <reference path="jquery.d.ts" />

// Template Strings (strings that use backticks)
// String Interpolation with Template Strings
let kingName = 'Tyrone';
let greeting = `Hi ${kingName}, how are you?`;
// Multiline Strings with Template Strings
let multiline = `This is an example
of a multiline string`;

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

class Car {
    readonly make: string;
    readonly model: string;
    readonly year = 2018;

    constructor() {
        this.make = "Unknown Make"; // Assignment permitted in constructor
        this.model = "Unknown Model"; // Assignment permitted in constructor
    }
}

let numbers: Array<number> = [0, 1, 2, 3, 4];
let moreNumbers: ReadonlyArray<number> = numbers;
// moreNumbers[5] = 5; // Error, elements are read-only
// moreNumbers.push(5); // Error, no push method (because it mutates array)
// moreNumbers.length = 3; // Error, length is read-only
// numbers = moreNumbers; // Error, mutating methods are missing
