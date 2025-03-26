// Retrieve the div and console.log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// Change the name "Pete" to "Richard"
const secondUl = document.querySelectorAll(".list")[0]; 
const secondLi = secondUl.querySelectorAll("li")[1];  
secondLi.textContent = "Richard";

// Delete the second <li> of the second <ul>
const thirdUl = document.querySelectorAll(".list")[1]; 
const secondLiSecondUl = thirdUl.querySelectorAll("li")[1]; 
thirdUl.removeChild(secondLiSecondUl);

// Change the name of the first <li> of each <ul> to your name
const allUl = document.querySelectorAll(".list");
allUl.forEach(ul => {
    const firstLi = ul.querySelector("li");
    firstLi.textContent = "Your Name"; 
});

// Add a class called student_list to both of the <ul>'s
allUl.forEach(ul => {
    ul.classList.add("student_list");
});

// Add the classes university and attendance to the first <ul>
allUl[0].classList.add("university", "attendance");

// Add a light blue background color and some padding to the <div>
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// Do not display the <li> that contains the text node “Dan”
const danLi = thirdUl.querySelector("li:last-child"); 
danLi.style.display = "none";

// Add a border to the <li> that contains the text node “Richard”
const richardLi = secondUl.querySelectorAll("li")[1]; 
richardLi.style.border = "2px solid black";

// Change the font size of the whole body
document.body.style.fontSize = "16px";

// Bonus: If the background color of the div is “light blue”, alert "Hello x and y"
if (containerDiv.style.backgroundColor === "lightblue") {
    alert(`Hello ${secondUl.querySelector("li:first-child").textContent} and ${thirdUl.querySelector("li:first-child").textContent}`);
}
