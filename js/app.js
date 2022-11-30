'use strict';

//console.log('Hey y\'all!');

//TODO; GET USERS NAME - prompt - alert a greeting back to the user

let userName = prompt('What is your name?');

alert(`Hello, ${userName}! Please answer the following questions with yes/no or y/n.`);

//TODO: prompt them with 5 yes or no (y/n) questions, alert if they got the answer right or wrong

let firstGuess = prompt('Am I a Washington native?').toLowerCase();

if(firstGuess === 'yes' || firstGuess === 'y'){
  alert('Sorry, you got it wrong');
}else if(firstGuess === 'no' || firstGuess === 'n'){
  alert('You got it right!');
}


let secondGuess = prompt('Am I a Florida native?').toLowerCase();

if(secondGuess === 'yes' || secondGuess === 'y'){
  alert('You got it right!');
}else if(secondGuess === 'no' || secondGuess === 'n'){
  alert('Sorry, you got it wrong.');
}


let thirdGuess = prompt('Do I have any children?').toLowerCase();

if(thirdGuess === 'yes' || thirdGuess === 'y'){
  alert('You got it right!');
}else if(thirdGuess === 'no' || thirdGuess === 'n'){
  alert('Sorry, you got it wrong.');
}


let fourthGuess = prompt('Do I have any grandchildren?').toLowerCase();

if(fourthGuess === 'yes' || fourthGuess === 'y'){
  alert('Sorry, you got it wrong');
}else if(fourthGuess === 'no' || fourthGuess === 'n'){
  alert('You got it right!');
}


let fifthGuess = prompt('Have I ever lived outside of the U.S.?').toLowerCase();

if(fifthGuess === 'yes' || fifthGuess === 'y'){
  alert('You got it right!');
}else if(fifthGuess === 'no' || fifthGuess === 'n'){
  alert('Sorry, you got it wrong.');
}

//TODO: GIVE a personalized message at the end

alert(`Thank you, ${userName} for playing my guessing game! I hope you enjoyed getting to know me. Goodbye.`);
