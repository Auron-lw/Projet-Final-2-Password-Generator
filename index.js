import { prompt } from "./prompt.js";

const generateRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const generateSpecialChar = () => {
  const s = '!"§$%&/()=?\u{20ac}';

  const randomIndex = Math.floor(Math.random() * s.length);

  return s.substring(randomIndex, randomIndex + 1);
};

const generateUpperCaseChar = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const randomIndex = Math.floor(Math.random() * alphabet.length);

  return alphabet.substring(randomIndex, randomIndex + 1);
};

const questions = () => {
  // Range of characters ?
  const charRange = Number(
    prompt(
      `How many characters you want (8-36) ?
    > `
    )
  );
  // specials characters ?
  const charSpecial = prompt(
    `Do you want special characters (y/n) ?
    > `
  ).toLowerCase();
  // includes numbers ?
  const charNumbers = prompt(
    `Do you want numbers (y/n) ?
    > `
  ).toLowerCase();
  // includes uppercase ?
  const charUpper = prompt(
    `Do you want uppercase letters (y/n) ?
    > `
  ).toLowerCase();
  console.log("----------------------------------------------");

  if (!charRange || !charSpecial || !charNumbers || !charUpper) {
    questions();
  }

  if (charRange < 8 || charRange > 36) {
    questions();
  }

  if (charSpecial === "y") {
    generateSpecialChar();
  }

  if (charNumbers === "y") {
    generateRandomNumber(1, 9);
  }

  if (charUpper === "y") {
    generateUpperCaseChar();
  }
};
questions();
