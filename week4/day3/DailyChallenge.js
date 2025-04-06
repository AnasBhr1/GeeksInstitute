// Part 1: Create the Video class with a constructor and watch() method
class Video {
    constructor(title, uploader, time) {
      this.title = title;   // title of the video
      this.uploader = uploader; // person who uploaded the video
      this.time = time;   // duration of the video in seconds
    }
  
    // Method to display a message indicating the uploader watched the entire video
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  // Part 2: Instantiate two Video objects with different values and call the watch() method
  
  const video1 = new Video("JavaScript Tutorial", "Alice", 300);
  const video2 = new Video("React Basics", "Bob", 450);
  
  // Call the watch() method for both video instances
  video1.watch();  // Output: Alice watched all 300 seconds of JavaScript Tutorial!
  video2.watch();  // Output: Bob watched all 450 seconds of React Basics!
  
  // Part 3: Bonus - Use an array to store data for five Video instances
  const videoData = [
    ["JavaScript Tutorial", "Alice", 300],   // Data for first video
    ["React Basics", "Bob", 450],   // Data for second video
    ["CSS Grid Layout", "Charlie", 360],   // Data for third video
    ["Node.js Introduction", "David", 400],   // Data for fourth video
    ["JavaScript Functions", "Eve", 275]   // Data for fifth video
  ];
  
  // Part 4: Bonus - Loop through the videoData array and instantiate Video objects
  const videos = [];  // Array to store Video instances
  
  videoData.forEach(data => {
    const video = new Video(data[0], data[1], data[2]);  // Instantiate a new Video with the data
    videos.push(video);  // Push the instance into the videos array
  });
  
  // Call the watch() method for each video in the videos array
  videos.forEach(video => video.watch()); 
  // Outputs:
  // Alice watched all 300 seconds of JavaScript Tutorial!
  // Bob watched all 450 seconds of React Basics!
  // Charlie watched all 360 seconds of CSS Grid Layout!
  // David watched all 400 seconds of Node.js Introduction!
  // Eve watched all 275 seconds of JavaScript Functions!
  