const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedEpic = epic.reduce((acc, currentVal) => acc + ' ' + currentVal);

console.log(combinedEpic);

