const mayusCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusCharacters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+';
const allCharacters = mayusCharacters + minusCharacters + numbers + specialCharacters;

const pickRandomCharacter = (characters) => characters[Math.floor(Math.random() * characters.length)];

const generatePassword = (length) => {
  const minusCharacter = pickRandomCharacter(minusCharacters);
  const mayusCharacter = pickRandomCharacter(mayusCharacters);
  const number = pickRandomCharacter(numbers);
  const specialCharacter = pickRandomCharacter(specialCharacters);

  const initalCharacters = [minusCharacter, mayusCharacter, number, specialCharacter];

  const remainingCharacters = Array.from({ length: length - initalCharacters.length }, () => pickRandomCharacter(allCharacters));

  const password = [...initalCharacters, ...remainingCharacters].sort(() => Math.random() - 0.5).join('');

  return password;
}

console.log(generatePassword(10));
