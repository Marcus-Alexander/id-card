// [array]
// var numbers = [1, 2, 3];
// numbers.length;
//
// numbers.sort();
//
// numbers.push(24);
//
// numbers.pop();
// console.log(numbers);
// numbers.sort();
// console.log(numbers);
//
// // OBJECTS
//
// var vehicle = {
// make: "Toyota",
// model: "Tacoma",
// weightInPounds: 3980,
// color: "Red",
// numberOfDoors: 4,
// fourWheelDrive: true
// }
//
// // objectName.propertyName
// vehicle.model
// console.log(vehicle);
//
// vehicle.model

LOOPS

var cupsOfFlourCalledFor = 4;
var currentCups;

for(var i = 0; i < 4; i++) {
current Cups = 'There are currently' + i + 'cups of flour in the bowl.');
}
alert('The bowl has all the flour it needs!');

LOOPING THROUGH array

var myArray = [3, 5, 9, 11, 18, 27, 55, 84, 98];

for (var i = 0; i < myArray.length; i++)
{
    if (myArray[i] >= 10) {
        alert('Double Digits!');
    }   else{
        alert('Single Digits');
    }
}
console.log(myArray);

var awesomeBirds = ['Bluebird', 'Roadrunner', 'Desert Dove', 'Pigeon'];

for (var i = 0; i < awesomeBirds.length; i++) {
    if (awesomeBirds[i] === 'Bluebird') {
        alert('Bluebirds are so beautiful');
    } else {
        alert("Not as beautiful as Bluebirds");
    }
}
//
// // FUNCTION
//
// function name(a, b) {
//     return a * b;
// }
//
// var myProduct = name(a, b);
//
// function addStrings(string1, string2) {
//   return string1 + string2;
// }
// console.log(addStrings(3,5));
//
// function calculateNumbers(){
//     var number1 = 10;
//     var number2 = 3;
//     var number3 = number1 + number2;
//
//     if (number3 >= 10){
//         alert("Big number");
//     }
//     else {
//         alert("Small number");
//     }
// }


function numberCalculation (number1, number2) {
  return number1 * number2
}
var number1 = 45;
var number2 = 78;
var multiplyNumbers = number1 * number2;

// if (multiplyNumbers < 2000) {
//   alert("I wish it was a bigger number");
// } else {
//   alert("That's more like it!");
// }
//
// console.log(multiplyNumbers);

// RETRIEVING DOM ELEMENTS
//
// let myButton = document.getElementById("");

// let fruit = document.getElementsByTagName("");
//
// let text = document.getElementsByClassName("");
//
// Grey button = variable name for elements in quotations.
// For numbers.
//
// let age = parseInt(document.getElementById('').value);

// var text = document.getElementById("paragraph").innerHTML;

// Handling Events
//
// myButton.addEventListener("click", function() {
//     alert("Click!!");
// })

function nameInfo () {
  let firstName = document.getElementById('first');
  let middleName = document.getElementById('middle');
  let lastName = document.getElementById('last');
  let fullName = firstName + middleName + lastName;
}
