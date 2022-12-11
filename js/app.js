'use strict';

//console.log('Hey y\'all!');

//TODO; GET USERS NAME - prompt - alert a greeting back to the user
let score = 0;
let question = 0;
let userName = prompt('What is your name?');

alert(`Hello, ${userName}! Please answer the following questions with yes/no or y/n.`);

//TODO: prompt them with 5 yes or no (y/n) questions, alert if they got the answer right or wrong and keep score.

let firstGuess = prompt('Am I a Washington native?').toLowerCase();
question++;

if(firstGuess === 'yes' || firstGuess === 'y'){
  alert('Sorry, you got it wrong');
  //console.log('Sorry, you got it wrong.');
}else if(firstGuess === 'no' || firstGuess === 'n'){
  alert('You got it right!');
  score++;
  //console.log('You got it right!');
}

let secondGuess = prompt('Am I a Florida native?').toLowerCase();
question++;

if(secondGuess === 'yes' || secondGuess === 'y'){
  alert('You got it right!');
  //console.log('You got it right!');
  score++;

}else if(secondGuess === 'no' || secondGuess === 'n'){
  alert('Sorry, you got it wrong.');
  //console.log('Sorry, you got it wrong.');
}

let thirdGuess = prompt('Do I have any children?').toLowerCase();
question++;

if(thirdGuess === 'yes' || thirdGuess === 'y'){
  alert('You got it right!');
  score++;
  //console.log('You got it right!');
}else if(thirdGuess === 'no' || thirdGuess === 'n'){
  alert('Sorry, you got it wrong.');
  //console.log('Sorry, you got it wrong.');
}

let fourthGuess = prompt('Do I have any grandchildren?').toLowerCase();
question++;

if(fourthGuess === 'yes' || fourthGuess === 'y'){
  alert('Sorry, you got it wrong');
  //console.log('Sorry, you got it wrong.');
}else if(fourthGuess === 'no' || fourthGuess === 'n'){
  alert('You got it right!');
  score++;
  //console.log('You got it right!');
}

let fifthGuess = prompt('Have I ever lived outside of the U.S.?').toLowerCase();
question++;

if(fifthGuess === 'yes' || fifthGuess === 'y'){
  alert('You got it right!');
  score++;
  //console.log('You got it right!');
}else if(fifthGuess === 'no' || fifthGuess === 'n'){
  alert('Sorry, you got it wrong.');
  //console.log('Sorry, you got it wrong.');
}

//TODO: prompt user to guess number in 4 tries, tell if too high or too low, give the number after 4 tries.

let myNum = 12;
question++;

for (let i = 0; i < 4; i++) {
  let sixthGuess = +prompt('Guess what number I am thinking about?');

  if (sixthGuess > myNum) {
    alert('Whoa, too high');
  }
  else if(sixthGuess < myNum) {
    alert('Whoa, too low');
  }
  else if(sixthGuess === myNum) {
    alert('You got it right!');
    score++;
    break;
  }
  if(i === 3) {
    alert('You are out of attempts, the answer was 12!');
  }
}

// TODO:  create loop for user to guess one of favorite novels with 6 tries total, keep score and display correct answer at end.

let guesses = 6;
let romanceNovels = ['DEVIL IN WINTER', 'HELLO STRANGER', 'CHASING CASSANDRA'];
question++;

for (let i = 0; i < guesses; i++) { //outer loop
  let seventhGuess = prompt('What is one of my favorite romance novels?').toUpperCase();

  for (let j = 0; j < romanceNovels.length; j++) { //inner loop
    if (seventhGuess === romanceNovels[j]) {
      alert('Yes, so hot!');
      score++;
      i = guesses;
      break;
    }
  }
}
//TODO: GIVE a personalized message at the end with the total score
alert(`Nice ${userName}, you got ${score} out of 7, right! Hope you had fun and thanks for playing!`);

