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
