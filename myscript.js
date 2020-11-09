// euals operator
var x = 10;
console.log(x)
// addition Operator
var x = 20;
var y = 10;
x += y;
console.log(x)
// subtraction operator
var x = 20;
var y = 10;
x -= y;
console.log(x)
// division operator
var x = 20;
var y = 10;
x /= y;
console.log(x)
// remainder Operator
var x = 20;
var y = 10;
x %= y;
console.log(x)
// increment Operator
var x = 20;
x ++;
var z = x;
console.log(x)
// decrementing Operator
var x = 20;
x --;
var z = x;
console.log(x)
// equal to
var x = 1 == 1
console.log(x)
// equal value and equal type
var x = 10 === 10
console.log(x)
// not egual
var x = 12 != 10
console.log(x)
// not equal value or not equal type
var x = 15 !== 10
console.log(x)
// greater than
var x = 15 > 10
console.log(x)
// less than
var x = 15 < 10
console.log(x)
// greater than or equal to
var x = 15 >= 10
console.log(x)
// less than or equal to
var x = 15 <= 10
console.log(x)
// area of rectangle
function area(l, w) { 
    var areax = l * w;
    console.log (areax);
}
area(20, 10)
// converting workdone to newton
function workdone(f,d) {
    var workdonex = f * d;
    console.log (workdone)
}
workdone(5, 50)
// circumference of a circle
function circumference(c, pi, r) {
    var circumferencex = 2 * pi * r;
    console.log(circumference)
}
circumference(2, 3.14, 7)
// degree to radian
function degree(d, r) {
    var degreex = d * 3.14/180;
    console.log(degreex)
}
degree(5)