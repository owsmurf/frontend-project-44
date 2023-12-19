#!/usr/bin/env node
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProgression(length, start, diff) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * diff);
  }
  return progression;
}

function hideNumber(progression) {
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { progression, hiddenValue };
}

function checkAnswer(progression, hiddenValue) {
  const playerAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = hiddenValue.toString();

  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
}

function playGame() {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('What number is missing in the progression?');

  let correctAnswersCount = 0;
  const maxAttempts = 3;

  while (correctAnswersCount < maxAttempts) {
    const progressionLength = getRandomNumber(5, 10);
    const startValue = getRandomNumber(1, 10);
    const commonDifference = getRandomNumber(2, 5);

    const progression = generateProgression(progressionLength, startValue, commonDifference);
    const { progression: hiddenProgression, hiddenValue } = hideNumber([...progression]);

    console.log(`Question: ${hiddenProgression.join(' ')}`);
    const isAnswerCorrect = checkAnswer(hiddenProgression, hiddenValue);

    if (isAnswerCorrect) {
      correctAnswersCount += 1;
    } else {
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }

  if (correctAnswersCount === maxAttempts) {
    console.log(`Congratulations, ${playerName}!`);
  }
}

playGame();
