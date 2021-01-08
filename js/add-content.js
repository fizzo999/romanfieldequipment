// 'use strict'

// wrapping in a function

function MyHello() {
  var today = new Date();
  var hourNow = today.getHours();
  var Fgreeting;

  if (hourNow > 18) {
    Fgreeting = 'Good evening, ';
  } else if (hourNow > 11) {
    Fgreeting = 'Good afternoon, ';
  } else if (hourNow > 0) {
    Fgreeting = 'Good morning, ';
  } else {
    Fgreeting = 'Welcome ';
  }

  document.write('<h3>' + Fgreeting + '</h3>');
  return Fgreeting;
}


let greeting = MyHello();


