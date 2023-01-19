let x = 16 + 'Volvo';
document.getElementById("datatypeString").innerHTML = x;
let y = 'Volvo' + 16;
document.getElementById("datatypeString2").innerHTML = y;

let z = 16 + 4 + 'Garuda';
document.getElementById("datatypeString3").innerHTML = z;
let a = 'Garuda' + 16 + 4;
document.getElementById("datatypeString4").innerHTML = a;

let b;
b = 50;
b = "VolvoLatest"
document.getElementById ("datatypeDynamic").innerHTML = b;

// Datatype String
let carName1 = "BMW Car";
let carName2 = 'AUDI Car';
document.getElementById("datatypeStringeg").innerHTML = carName1 + "<br>" + carName2;

// Data type numbers
let x1 = 34.00;
let x2 = 35;
let x3 = 36.66
document.getElementById("datatypeNumber").innerHTML = x1 + " First value 34.00 <br>" + x2 + " Second value 35 <br>" + x3 + " Third value 36.66";

// Data type numbers: Exponential Numbers
let y1 = 123e5;
let y2 = 123e-5;
document.getElementById("exponentialNumber").innerHTML = y1 + "<br>" + y2;

// Datatype BigInt
let big = BigInt(123456789012345678901234567890n);
document.getElementById("datatypeBigInt").innerHTML = big;

// Datatype Boolean
let b1 = 5;
let b2 = 5;
let b3 = 15
document.getElementById("datatypeBoolean").innerHTML = (b1 == b2) + "<br>" + (b1 == b3);

// Datatype Array
let cars = ["AUDI", "BMW", "BENZ"];
document.getElementById("datatypeArray").innerHTML = cars;
document.getElementById("datatypeArray0").innerHTML = cars[0];
document.getElementById("datatypeArray1").innerHTML = cars[1];
document.getElementById("datatypeArray2").innerHTML = cars[2];

// Datatype Object
const person = { 
    firstName: "Santhosh",
    secondName: "Pavadala",
    age: 28,
    eyeColor: "black"
};
document.getElementById("datatypeObject").innerHTML = person.firstName +" " + person.secondName + " is " + person.age + " Years old & eyecolor is " + person.eyeColor ;

// Datatype typeof
document.getElementById("datatypeTypeof").innerHTML = typeof "" + "<br>" + typeof "Santhosh" + "<br>" + typeof 100 + "<br>" + typeof true +" <br> "+ typeof 50 + "<br>" + typeof + 55.55 + "<br>" + typeof (75) + "<br>" + typeof (50+75);

// Datatype Undefined
let car;
document.getElementById("datatypeUndefined").innerHTML = car + "<br>" + typeof car;

let car1 = "volvo";
car1 = undefined;
document.getElementById("datatypeUndefined1").innerHTML = car1 + "<br>" + typeof car1;

// Datatype Empty Values
let car2 = "";
document.getElementById("datatypeEmpty").innerHTML = "The value is:" + car2 + "<br>" + typeof car2;