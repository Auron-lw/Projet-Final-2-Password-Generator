import { prompt } from "./prompt.js";

const passwordLength = () => {
  const passLengthInput = Number(
    prompt("How many characters you want (8-36) ?\n> ")
  );
  if (passLengthInput < 8 || passLengthInput > 36 || isNaN(passLengthInput)) {
    throw new Error("Password length must be a number between 8 and 36\n");
  } else {
    return passLengthInput;
  }
};

const charSpecial = () => {
  const charSpecInput = prompt("\nDo you want special characters (y/n) ?\n> ");

  isYesOrNo(charSpecInput);

  return charSpecInput;
};

const charNumbers = () => {
  const charNumbersInput = prompt("\nDo you want numbers (y/n) ?\n> ");

  isYesOrNo(charNumbersInput);

  return charNumbersInput;
};

const charUpperCase = () => {
  const charUpper = prompt("\nDo you want uppercase letters (y/n) ?\n> ");

  isYesOrNo(charUpper);

  return charUpper;
};

const isYesOrNo = (value) => {
  if (value.toLowerCase().startsWith("y")) {
    return true;
  } else if (value.toLowerCase().startsWith("n")) {
    return false;
  }

  throw new Error("Please answer with 'y' (yes) or 'n' (no)\n");
};

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

const core = () => {
  let passLength = null;
  let specialChar = null;
  let numbersChar = null;
  let UpperCaseChar = null;

  while (
    passLength === null ||
    specialChar === null ||
    numbersChar === null ||
    UpperCaseChar === null
  ) {
    try {
      passLength = passLength ? passLength : passwordLength();
      specialChar = specialChar ? specialChar : charSpecial();
      numbersChar = numbersChar ? numbersChar : charNumbers();
      UpperCaseChar = UpperCaseChar ? UpperCaseChar : charUpperCase();
    } catch (error) {
      console.log(error.message);
    }
  }
};
core();

console.log("----------------------------------------------");
