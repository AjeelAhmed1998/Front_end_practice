"use strict";

const secondHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {


  const now = new Date

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;


  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `roatate(${hourDegrees})`;


}

setInterval(setDate, 1000);
setDate();


//this is a function declaration and it is visible everywhere
function sayHello() {
  console.log('hello me');
}

//this on the other hand is a function expression and works like this
//it cannot be see by objects before it in the script
//basically you define a function and then put that function inside a normal looking variable
//and now that variable is a variable of object type
let sayHel = function () {
  console.log("hello world 2");
};

let sayHi = function (name) {  // (*) no magic any more
  alert(`Hello, ${name}`);
};


let person =  {};
person.
