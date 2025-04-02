// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - Running funcOne() will alert: "inside the funcOne function 3"
// Because 'a' is reassigned inside the if block.

// #1.2 - If 'a' is declared with 'const', reassignment will cause an error.


// #2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - Running:
// funcThree() -> Alerts "inside the funcThree function 0" (global 'a' is 0)
// funcTwo() -> Changes 'a' to 5
// funcThree() -> Alerts "inside the funcThree function 5"

// #2.2 - If 'a' is declared with 'const', funcTwo() will cause an error (cannot reassign 'const').


// #3
function funcFour() {
    window.a = "hello"; // Creates a global variable 'a' attached to the window object.
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - Running:
// funcFour() -> Sets window.a = "hello"
// funcFive() -> Alerts "inside the funcFive function hello"


// #4
let a = 1;
function funcSix() {
    let a = "test"; // This 'a' is local to funcSix
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - Running funcSix() will alert: "inside the funcSix function test"
// Because 'a' inside the function is a new local variable, not affecting the global 'a'.

// #4.2 - If 'a' inside funcSix is declared with 'const', it will still work since there is no reassignment.


// #5
let a = 2;
if (true) {
    let a = 5; // New 'a' scoped to the if block
    alert(`in the if block ${a}`); // Alerts "in the if block 5"
}
alert(`outside of the if block ${a}`); // Alerts "outside of the if block 2"

// #5.1 - Running will alert:
// "in the if block 5"
// "outside of the if block 2"
// Because 'let a = 5;' is block-scoped to the if statement.

// #5.2 - If 'a' is declared with 'const', the behavior remains the same,
// but 'a' inside the if block cannot be reassigned (though it's not reassigned here).
