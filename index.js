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

const charLength = () => {
  const passLength = Number(
    prompt(
      `How many characters you want (8-36) ?
    > `
    )
  );
  if (!passLength && passLength < 8 && passLength > 36) {
    console.log(
      "Password length must have a length between 8 and 36 characters"
    );
    charLength();
  }
};

const charSpecial = () => {
  const charSpec = prompt(
    `Do you want special characters (y/n) ?
  > `
  ).toLowerCase();

  if (charSpec !== "y" && charSpec !== "n") {
    console.log("Please answer with 'y' for 'yes' or 'n' for 'no'");
    charSpecial();
  }
};

const charNumbers = () => {
  const charNumber = prompt(
    `Do you want numbers (y/n) ?
  > `
  ).toLowerCase();

  if (charNumber !== "y" && charNumber !== "n") {
    console.log("Please answer with 'y' for 'yes' or 'n' for 'no'");
    charNumbers();
  }
};

const charUpperCase = () => {
  const charUpper = prompt(
    `Do you want uppercase letters (y/n) ?
    > `
  ).toLowerCase();

  if (charUpper !== "y" && charUpper !== "n") {
    console.log("Please answer with 'y' for 'yes' or 'n' for 'no'");
    charUpperCase();
  }
};

const questions = () => {};

console.log("----------------------------------------------");
