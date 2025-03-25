const people = ["Greg", "Mary", "Devon", "James"];

// 1.remove "greg

people.shift();
console.log(people);

// 2. replace "james" with "jason"

people[people.indexOf("James")] = "Jason";
console.log(people);

// 3 . adding name

people.push("Anas");
console.log(people);

// 4 . console log marry

console.log(people.indexOf("Marry"));

// 5 - slice method

const peopleCopy = people.slice(1, -1);
console.log(peopleCopy);

// 6 - index of "Foo"

console.log(people.indexOf("Foo")); // -1 (Not found in array)

// 7 - the last element

const last = people[people.lentgh - 1]
console.log(last);

// PART 2 

// 1. Iterate through the array and log each person

for ( let person of people){
    console.log(person);
}

// 2. Iterate through the array and stop after logging "Devon"

for ( let person of people){
    console.people(person);
    if (person === "Devon")
    break;
}