#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function playCalcGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const expression = ['+', '-', '*'];
    const randomNum = Math.floor(Math.random() * 25) + 1;
    const randomNum2 = Math.floor(Math.random() * 10) + 1;
    console.log(`Question: ${randomNum} ${expression[i]} ${randomNum2}`);
    const correctAnswer = [randomNum + randomNum2, randomNum - randomNum2, randomNum * randomNum2];
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) !== correctAnswer[i]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}! You won!`);
}

playCalcGame();
