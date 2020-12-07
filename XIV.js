// Accessing thenfull array
var cars = ["Benz AMG", "Bently", "Bugatti"];
document.getElementById("demo").innerHTML = cars;

// Array Indexes
var cars = ["Toyota", "Volkswagen", "BMW"];
document.getElementById("demo1").innerHTML = cars[0];

// Length Property for getting of elements in arrays
var phones = ["iPhone", "samsung", "Infinix", "Tecno"];
document.getElementById("demo2").innerHTML = phones.length;

// push() method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = fruits;
fruits.push("Lemon");
document.getElementById("demo3").innerHTML = fruits;

// length property
var designers = ["Gucci", "Louis voullton", "Burberry", "Fendi"];
document.getElementById("demo4").innerHTML = designers;
designers[designers.length] = "Ashluxe";
document.getElementById("demo4").innerHTML = designers;

// Ass0ciative Arrays
var person = [];
person[0] = "Boujee";
person[1] = "kings";
person[2] = 46; 
document.getElementById("demo5").innerHTML =
person[0] + " " + person.length;

// Recognizing an array
var footwears = ["Nike", "Air", "Addidas", "reebok"];
document.getElementById("demo6").innerHTML = Array.isArray(footwears);

// join() method
var computers = ["Macbook", "Alien", "Hp", "dell"];
document.getElementById("demo7").innerHTML = computers.join(" + ");

// popping method()
var Musicians = ["Roddyrich", "Davido", "lildurk", "olamide"];
document.getElementById("demo9").innerHTML = Musicians;
Musicians.pop();
document.getElementById("demoX").innerHTML = Musicians;

// push()
var currency = ["pounds sterling", "Euro", "Dollar", "Naira"];
document.getElementById("demoxi").innerHTML = currency;
currency.push("Kiwi");
document.getElementById("demoxi").innerHTML = currency;

// shift()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demoxii").innerHTML = fruits;
fruits.shift();
document.getElementById("demoxiii").innerHTML = fruits;

// unshift()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demoxiv").innerHTML = fruits;
fruits.unshift("Lemon");
document.getElementById("demoxiv").innerHTML = fruits;

// changing elements by indexes
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demoxv").innerHTML = fruits;
fruits[0] = "Kiwi";
document.getElementById("demoxvi").innerHTML = fruits;

// splice() method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demoxvii").innerHTML = fruits;
fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demoxvii").innerHTML = fruits;

// splice() method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demoxviii").innerHTML = fruits;
fruits.splice(0, 1);
document.getElementById("demoxviii").innerHTML = fruits;

//  concat() method
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
document.getElementById("demoxix").innerHTML = myChildren;

// slice() method 
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
document.getElementById("demoxx").innerHTML = fruits + "<br><br>" + citrus;