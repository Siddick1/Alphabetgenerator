'use strict';

// Preparing for dom manipulation
const letterEl = document.querySelector('.letter');
const btnRoll = document.querySelector('.btn--roll--alphabet');
const btnRollVowel = document.querySelector('.btn--roll--vowel');
const btnNegative = document.querySelector('.btn--negative');

// Declaring and initiating variables
let totalCounter = 0;
let positiveCounter = 0;
let negativeCounter = 0;
let accuracyCounter = 0;

// Function to easily manipulate the dom
const counterDisplayer = function () {
  document.querySelector('.total').textContent = totalCounter;
  document.querySelector('.negative').textContent = negativeCounter;
  document.querySelector('.positive').textContent = positiveCounter;
  document.querySelector('.accuracy').textContent = `${(
    (positiveCounter * 100) /
    totalCounter
  ).toFixed(1)} %`;
};

const positiveCounterFunction = function () {
  totalCounter += 1;
  positiveCounter += 1;
};

// Button for rolling any alphabet
btnRoll.addEventListener('click', function () {
  // 1. Generate a random number beetween 1-26
  const letter = Math.trunc(Math.random() * 26) + 1;
  // 2. Display the letter image according to the rolled number
  letterEl.src = `assets/letter-${letter}.png`;
  //3. Counter manipulation
  positiveCounterFunction();
  counterDisplayer();
});

// Button for rolling vowels
btnRollVowel.addEventListener('click', function () {
  // 1. Generate a random number beetween 1-6
  const letter = Math.trunc(Math.random() * 6) + 1;
  // 2. Display the letter image according to the rolled number
  letterEl.src = `assets/letter-${letter}-${letter}.png`;
  //3. Counter manipulation
  positiveCounterFunction();
  counterDisplayer();
});

// Button for bad guessed pronountiation
btnNegative.addEventListener('click', function () {
  totalCounter += 1;
  negativeCounter += 1;
  counterDisplayer();
});
