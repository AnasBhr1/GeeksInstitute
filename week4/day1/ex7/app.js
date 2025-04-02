(function(username) {
    const userDiv = document.getElementById('user-info');
    
    // Create the user's name and profile picture
    const userName = document.createElement('span');
    userName.textContent = username;

    const profileImage = document.createElement('img');
    profileImage.src = 'https://www.w3schools.com/w3images/avatar2.png'; 
    profileImage.alt = 'Profile Picture';

    // Append the name and image to the navbar
    userDiv.appendChild(userName);
    userDiv.appendChild(profileImage);
})('John');  
