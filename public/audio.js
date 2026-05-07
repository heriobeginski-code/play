export function initAudio() {
  const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
  audio.loop = true;
  
  // Play the music
  audio.play().catch(err => console.log("Audio play failed:", err));
  
  return audio; // Return it so the manager can pause it later if needed
}