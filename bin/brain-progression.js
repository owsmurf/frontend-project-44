#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function playProgression() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const arrays = [
    [5, 7, 9, 11, 13, 15, 17, 19, 21, 23],
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
    [2, 3, 5, 8, 12, 17, 23, 30, 38, 47],
  ];

  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 9) + 1;
    const newArr = arrays[i];
    const correctAnswer = newArr[randomNum];
    newArr[randomNum] = '..';
    console.log(`Question: ${newArr}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}! You won!`);
}

playProgression();
