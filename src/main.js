import './style.css';
import { initTubes } from './tubes.js';
import { initAudio } from './audio.js';

// 1. Set up the HTML immediately
document.querySelector('#app').innerHTML = `
  <div id="canvas-wrapper"></div>
  <nav class="persistent-menu">
    <button class="genre-btn" data-genre="chill">CHILL</button>
    <button class="genre-btn" data-genre="hype">HYPE</button>
    <button class="genre-btn" data-genre="mystery">MYSTERY</button>
  </nav>
  <div id="welcome-screen">
    <h1 class="glow-title">SONIC TUBES</h1>
    <p>Select a vibe to start</p>
  </div>
`;

let experienceStarted = false;

// 2. Wrap the buttons in a check to ensure they exist
const buttons = document.querySelectorAll('.genre-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const genre = e.target.getAttribute('data-genre');
    
    // Start visuals only once
    if (!experienceStarted) {
      const screen = document.querySelector('#welcome-screen');
      if (screen) screen.style.display = 'none';
      initTubes(document.querySelector('#canvas-wrapper'));
      experienceStarted = true;
    }

    // Switch music
    initAudio(genre);
  });
});

console.log("System Restored. Buttons ready.");