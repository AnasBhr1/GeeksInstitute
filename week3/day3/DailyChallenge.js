// Array of planets with their names, colors, and number of moons
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "blue", moons: 14 }
];

// Select the section where planets will be displayed
const listPlanetsSection = document.querySelector(".listPlanets");

// Function to create a planet with moons
function createPlanet(planet) {
    // Create a div for the planet
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    // Create moons for the planet
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        // Position each moon around the planet (offset each by 40px to create circular layout)
        moonDiv.style.top = `${i * 40}px`;
        planetDiv.appendChild(moonDiv);
    }

    // Append the planet to the section
    listPlanetsSection.appendChild(planetDiv);
}

// Loop through each planet and create its representation
planets.forEach(createPlanet);
