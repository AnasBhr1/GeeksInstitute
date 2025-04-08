//1st challenge
// Function to make all words uppercase
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const uppercased = words.map(word => word.toUpperCase());
        resolve(uppercased);
      } else {
        reject("Error: Not all items in the array are strings.");
      }
    });
  }
  
  // Function to sort words if array length > 4
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        resolve(words.sort());
      } else {
        reject("Error: Array length is less than or equal to 4.");
      }
    });
  }
  
  // Test cases
  
  // Test case 1 (with non-string)
  makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Test case 2 (with < 5 words)
  makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Test case 3 (should succeed)
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

//2nd challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  // Function 1: Convert JSON string to JS object
  function toJs() {
    return new Promise((resolve, reject) => {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        reject("Error: Morse object is empty");
      } else {
        resolve(morseJS);
      }
    });
  }
  
  // Function 2: Prompt user and translate to Morse
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence to convert to Morse Code:").toLowerCase();
      const result = [];
  
      for (let char of userInput) {
        if (morseJS[char]) {
          result.push(morseJS[char]);
        } else {
          reject(`Error: Character "${char}" is not translatable to Morse code.`);
          return;
        }
      }
  
      resolve(result);
    });
  }
  
  // Function 3: Display on the page
  function joinWords(morseTranslation) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = morseTranslation.join("\n");
  }
  
  // Chain the functions
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(err => console.log(err));
  