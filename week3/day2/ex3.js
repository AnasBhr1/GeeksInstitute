// 1 Prompt the user for a number 

let userInput = prompt("Enter a number:");
console.log(`You entered: ${userInput}`);
console.log(`Data type: ${typeof userInput}`);

// 2 

let number;  
do {  
    number = Number(prompt("Enter a number (10 or higher to stop):"));  
} while (number < 10);  

console.log("You entered:", number);

