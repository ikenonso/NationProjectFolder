window.onload = setInterval(clock,1000);
function clock () {
// The getHours() method returns the hours of a date as a number (0-23):
var d = new Date();
document.getElementById("demo1").innerHTML = d.getHours();
// The getMinutes() method returns the minutes of a date as a number (0-59):
var d = new Date();
document.getElementById("demo2").innerHTML = d.getMinutes();
// The getSeconds() method returns the seconds of a date as a number (0-59):
var d = new Date();
document.getElementById("demo3").innerHTML = d.getSeconds();
// The getDay() method returns the weekday of a date as a number (0-6):
var d = new Date(); 
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo4").innerHTML = days[d.getDay()];
// The getMonth() method returns the month of a date as a number (0-11) 
// You can use an array of names, and getMonth() to return the month as a name which means you are accessing an array:
var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("demo5").innerHTML = months[d.getMonth()];
// The getDate() method returns the day of a date as a number (1-31):
var d = new Date();
document.getElementById("demo6").innerHTML = d.getDate();
}