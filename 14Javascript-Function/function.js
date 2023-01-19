// Javascript Functions
function myFunction(p1, p2) {
    return p1 * p2;
}
document.getElementById("jsFunction").innerHTML = myFunction(50, 100);

// Function Returns
let x = myFunction1(4, 3);
document.getElementById("jsFunction1").innerHTML = x;
function myFunction1(a, b) {
    return a * b;
}

// Why Functions? converting forenheat to celcius
function toCelcuius(f) {
    return (5/9) * (f-32);
}
document.getElementById("jsFunction2").innerHTML = toCelcuius(32);

// The () Operator Invokes the Function
function toCelcuius1(forenheat) {
    return (5/9) * (forenheat-32);
}
document.getElementById("jsFunction3").innerHTML = toCelcuius1;

// Functions Used as Variable Values
function toCelcuius2 (faranheat2) {
    return (5/9) * (faranheat2 - 32);
}
document.getElementById("jsFunction4").innerHTML = "The Temperature is " + toCelcuius2(77) + " celcius";

// Local Variables
myFunction2();
function myFunction2() {
    let carName = "volvo";
    document.getElementById("jsFunction5").innerHTML = carName;
}
document.getElementById("jsFunction6").innerHTML = typeof carName;
