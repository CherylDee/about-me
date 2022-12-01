'use strict';

//console.log('Hey y\'all!');

//TODO; GET USERS NAME - prompt - alert a greeting back to the user

let userName = prompt('What is your name?');

alert(`Hello, ${userName}! Please answer the following questions with yes/no or y/n.`);

//TODO: prompt them with 5 yes or no (y/n) questions, alert if they got the answer right or wrong

let firstGuess = prompt('Am I a Washington native?').toLowerCase();

if(firstGuess === 'yes' || firstGuess === 'y'){
  alert('Sorry, you got it wrong');
  //console.log('Sorry, you got it wrong.');
}else if(firstGuess === 'no' || firstGuess === 'n'){
  alert('You got it right!');
  //console.log('You got i t right!');
}


let secondGuess = prompt('Am I a Florida native?').toLowerCase();

if(secondGuess === 'yes' || secondGuess === 'y'){
  alert('You got it right!');
  //console.log('You got it right!');
}else if(secondGuess === 'no' || secondGuess === 'n'){
  alert('Sorry, you got it wrong.');
   //console.log('Sorry, you got it wrong.');
}


let thirdGuess = prompt('Do I have any children?').toLowerCase();

if(thirdGuess === 'yes' || thirdGuess === 'y'){
  alert('You got it right!');
  //console.log('You got it right!');
}else if(thirdGuess === 'no' || thirdGuess === 'n'){
  alert('Sorry, you got it wrong.');
   //console.log('Sorry, you got it wrong.');
}


let fourthGuess = prompt('Do I have any grandchildren?').toLowerCase();

if(fourthGuess === 'yes' || fourthGuess === 'y'){
  alert('Sorry, you got it wrong');
   //console.log('Sorry, you got it wrong.');
}else if(fourthGuess === 'no' || fourthGuess === 'n'){
  alert('You got it right!');
  //console.log('You got it right!');
}


let fifthGuess = prompt('Have I ever lived outside of the U.S.?').toLowerCase();

if(fifthGuess === 'yes' || fifthGuess === 'y'){
  alert('You got it right!');
  //console.log('You got it right!');
}else if(fifthGuess === 'no' || fifthGuess === 'n'){
  alert('Sorry, you got it wrong.');
   //console.log('Sorry, you got it wrong.');
}

//TODO: GIVE a personalized message at the end

alert(`Thank you, ${userName} for playing my guessing game! I hope you enjoyed getting to know me. Goodbye.`);

//TODO: prompt user to guess number in 4 tries, tell if too high or too low, give the number after 4 tries.

let myNum = 12
let numGuess = 0
let userGuess = prompt('What number am I thinking of?');

while (userGuess !== myNum && numGuess < 4) {
  if(userGuess < myNum) {
    alert('Too low');
    //console.log('Too low');
  }
  else if (userGuess > myNum) {
    alert('Too high');
    }
    //console.log('Too high');
    userGuess = prompt('What number am I thinking of?');
    numGuess++;
    if(userGuess !== myNum && numGuess === 4) {
      alert(`The correct number was ${myNum}!`);
      //console.log(`The correct number was ${myNum}!`);
    }
    else if(userGuess === myNum) {
      alert('You got it right!');
      //console.log('You got it right!');
    }
  }
