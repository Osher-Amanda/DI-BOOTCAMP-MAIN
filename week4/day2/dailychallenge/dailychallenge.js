// Create a class called Video
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    // Method that displays watch message
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
}


// Create first video object
const video1 = new Video(
    "JavaScript Tutorial",
    "John",
    300
);

// Call watch method
video1.watch();


// Create second video object
const video2 = new Video(
    "CSS Masterclass",
    "Sarah",
    450
);

// Call watch method
video2.watch();


// BONUS:

// Array containing data for 5 videos
const videoData = [
    ["React Basics", "Mike", 600],
    ["HTML Crash Course", "Emma", 420],
    ["Node.js Guide", "Daniel", 900],
    ["Python for Beginners", "Olivia", 700],
    ["Flexbox Tutorial", "Chris", 350]
];


// Loop through array and create Video instances
videoData.forEach(video => {
    const newVideo = new Video(video[0], video[1], video[2]);
    newVideo.watch();
});