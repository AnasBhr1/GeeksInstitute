// Change the id attribute from navBar to socialNetworkNavigation
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// Create a new <li> tag and append a text node with "Logout"
const newLi = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newLi.appendChild(logoutText);

// Append the new <li> to the <ul>
const ul = navBar.querySelector("ul");
ul.appendChild(newLi);

// Use firstElementChild and lastElementChild to retrieve the first and last <li> elements
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display the text content of the first and last <li> elements
console.log("First list item text: " + firstLi.textContent);
console.log("Last list item text: " + lastLi.textContent);   
