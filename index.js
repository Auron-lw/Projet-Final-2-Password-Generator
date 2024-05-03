import { prompt } from "./prompt.js";

const askPasswordLength = () => {
  const passLength = Number(
    prompt("How many characters you want (8-36) ?\n> ")
  );
  if (passLength < 8 || passLength > 36 || isNaN(passLength)) {
    throw new Error("Password length must be a number between 8 and 36\n");
  } else {
    return passLength;
  }
};

const askSpecialChars = () => {
  const charSpec = prompt("\nDo you want special characters (y/n) ?\n> ");

  isYesOrNo(charSpec);

  return charSpec;
};

const askNumbers = () => {
  const charNumbers = prompt("\nDo you want numbers (y/n) ?\n> ");

  isYesOrNo(charNumbers);

  return charNumbers;
};

const askUpperCase = () => {
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

const core = () => {
  let isLength = null;
  let specialChar = null;
  let numbers = null;
  let upperCaseChar = null;

  while (
    isLength === null ||
    specialChar === null ||
    numbers === null ||
    upperCaseChar === null
  ) {
    try {
      isLength = isLength ? isLength : askPasswordLength();
      specialChar = specialChar ? specialChar : askSpecialChars();
      numbers = numbers ? numbers : askNumbers();
      upperCaseChar = upperCaseChar ? upperCaseChar : askUpperCase();
    } catch (error) {
      console.log(error.message);
    }
  }

  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const SPECIALS = "!@#$%^&*()";
  const NUMBERS = "1234567890";

  const generatePassword = (length, specials, numbers, uppercase) => {
    let charset = LOWERCASE;

    if (specials === "y") {
      charset += SPECIALS;
    }

    if (numbers === "y") {
      charset += NUMBERS;
    }

    if (uppercase === "y") {
      charset += UPPERCASE;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  };

  const hasUpperCase = (password) => {
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= "A" && password[i] <= "Z") {
        return true;
      }
    }
    return false;
  };

  const password = generatePassword(
    isLength,
    specialChar,
    numbers,
    upperCaseChar
  );

  if (hasUpperCase(password)) {
    console.log("\nPassword :", password);
  } else {
    generatePassword(isLength, specialChar, numbers, upperCaseChar);
  }
};

core();

console.log("----------------------------------------------");
