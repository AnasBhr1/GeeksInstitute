// 1. Function Declaration

function kgToGrams(weight) {
    return weight * 1000;
}
console.log(kgToGrams(2)); 

// 2. Function Expression

const kgToGramsExpr = function(weight) {
    return weight * 1000;
};
console.log(kgToGramsExpr(5)); 

// Function declaration is hoisted, meaning it can be called before it is defined, while function expression is not hoisted.

// 3. Arrow Function (One Line)


const kgToGramsArrow = weight => weight * 1000;
console.log(kgToGramsArrow(3)); // 3000