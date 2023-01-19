let x,y,z;
x=5;
y=10;
z=x+y;
document.getElementById("statements").innerHTML = "The value of z is " + z +'.';

document.getElementById('statement2').innerHTML = 'Hello Dolly';

let a, b, c;
a = 25000;
b = 75000;
c = a * b;
document.getElementById('statement3').innerHTML = c;
// When separated by semicolons, multiple statements on one line are allowed:
// a = 5; b = 6; c = a + b;

// JavaScript Line Length and Line Breaks
// For best readability, programmers often like to avoid code lines longer than 80 characters.
// If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

function myFunction () {
    document.getElementById('demo1').innerHTML = 'Hello world';
    document.getElementById('demo2').innerHTML = 'Welcome to Javascript';
}