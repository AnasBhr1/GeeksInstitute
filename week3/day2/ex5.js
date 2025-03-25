// 1 

const family = {
    name: "Smith",
    members: 4,
    familyMembers: ["John", "Jane", "Jack", "Jill"],
    pets: ["dog", "cat"],
    isHappy: true
};

console.log(family);

// 2 

for (let key in family) {
    console.log(key);
}

// 3 

for (let key in family) {
    console.log(family[key]);
}