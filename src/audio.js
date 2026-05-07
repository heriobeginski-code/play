let audio = new Audio();

// Our "Record Crate" libraries
const libraries = {
  chill: [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  ],
  hype: [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  ],
  mystery: [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  ]
};

export function initAudio(genre = 'chill') {
  // 1. Stop any music currently playing
  audio.pause();
  audio.currentTime = 0; 

  // 2. Pick a random song from the chosen library
  const playlist = libraries[genre];
  const randomTrack = playlist[Math.floor(Math.random() * playlist.length)];
  
  // 3. Load and play
  audio.src = randomTrack;
  audio.play().catch(err => console.log("Waiting for user interaction..."));
  
  console.log(`DJ Genie switched to: ${genre}`);
  return audio;
}