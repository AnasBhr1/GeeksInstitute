// Get DOM elements
const loadCharacterButton = document.getElementById('loadCharacter');
const loadingElement = document.getElementById('loading');
const characterInfoElement = document.getElementById('characterInfo');

// API URL
const apiUrl = 'https://www.swapi.tech/api/people/';

// Function to get random character from API
function getRandomCharacter() {
    // Show loading icon
    loadingElement.style.display = 'block';
    characterInfoElement.innerHTML = ''; // Clear any previous character info
    
    // Generate a random ID between 1 and 83 (total number of characters in the API)
    const randomId = Math.floor(Math.random() * 83) + 1;

    // Fetch character data from API
    fetch(`${apiUrl}${randomId}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            // Hide loading icon
            loadingElement.style.display = 'none';

            // Extract character details
            const character = data.result.properties;
            const name = character.name;
            const height = character.height;
            const gender = character.gender;
            const birthYear = character.birth_year;
            const homeworldUrl = character.homeworld;

            // Get homeworld name
            fetch(homeworldUrl)
                .then(response => response.json())
                .then(homeworldData => {
                    const homeworldName = homeworldData.result.properties.name;
                    
                    // Display character info
                    characterInfoElement.innerHTML = `
                        <h2>${name}</h2>
                        <p><strong>Height:</strong> ${height} cm</p>
                        <p><strong>Gender:</strong> ${gender}</p>
                        <p><strong>Birth Year:</strong> ${birthYear}</p>
                        <p><strong>Homeworld:</strong> ${homeworldName}</p>
                    `;
                })
                .catch(error => {
                    characterInfoElement.innerHTML = '<p>Error fetching homeworld data.</p>';
                });
        })
        .catch(error => {
            // Hide loading icon if error occurs
            loadingElement.style.display = 'none';
            characterInfoElement.innerHTML = '<p>Error fetching character data.</p>';
        });
}

// Event listener to load a random character
loadCharacterButton.addEventListener('click', getRandomCharacter);
