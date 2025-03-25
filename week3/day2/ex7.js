const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const firstLetters = names.map(name => name[0]);

firstLetters.sort();

const secretSocietyName = firstLetters.join('');

console.log(secretSocietyName);