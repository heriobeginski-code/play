import './style.css';
import { initTubes } from './tubes.js';
import { initAudio } from './audio.js';

const root = document.querySelector('#app');

root.innerHTML = `
  <div id="canvas-wrapper"></div>
  
  <div id="intro-screen" class="overlay-full">
    <div class="loader-content">
      <h1 class="glitch-text">THE_GRID // V6</h1>
      <p class="status-text" style="letter-spacing: 2px; opacity: 0.7;">SYSTEM READY</p>
      <button id="enter-btn">INITIALIZE PROTOCOL</button>
    </div>
  </div>

  <div id="grid-interface" class="container" style="display: none;">
    <div class="control-panel">
       <div class="genre-group">
         <button class="genre-btn" data-genre="chill">CHILL</button>
         <button class="genre-btn" data-genre="hype">HYPE</button>
         <button class="genre-btn" data-genre="mystery">MYSTERY</button>
       </div>
       <button id="audio-toggle">⏸ PAUSE</button>
    </div>
    
    <div class="protocol-grid">
      <div class="node-card" data-url="https://learn.mangolanguages.com/login">
        <h3>LANGUAGE PROTOCOL</h3>
        <span style="font-size: 0.6rem; opacity: 0.6;">MANGO_SYSTEMS</span>
      </div>
      <div class="node-card" data-url="https://www.khanacademy.org/math/">
        <h3>MATHEMATICS</h3>
        <span style="font-size: 0.6rem; opacity: 0.6;">KHAN_CORE</span>
      </div>
      <div class="node-card" data-url="https://platform.outskill.com/">
        <h3>AI SPECIALIZATION</h3>
        <span style="font-size: 0.6rem; opacity: 0.6;">OUTSKILL_NODES</span>
      </div>
    </div>
  </div>
`;

let audioInstance = null;
let isPlaying = false;

// 1. INITIALIZE FUNCTION (Unlocks Audio on iPad)
document.getElementById('enter-btn').addEventListener('click', () => {
  document.getElementById('intro-screen').style.display = 'none';
  document.getElementById('grid-interface').style.display = 'block';
  
  // Start Specialists
  initTubes(document.getElementById('canvas-wrapper'));
  audioInstance = initAudio('chill'); 
  isPlaying = true;
});

// 2. GENRE SWITCHING
document.querySelectorAll('.genre-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const genre = e.target.getAttribute('data-genre');
    audioInstance = initAudio(genre);
    isPlaying = true;
    document.getElementById('audio-toggle').textContent = "⏸ PAUSE";
  });
});

// 3. PLAY/PAUSE TOGGLE
document.getElementById('audio-toggle').addEventListener('click', (e) => {
  if (!audioInstance) return;

  if (isPlaying) {
    audioInstance.pause();
    e.target.textContent = "▶ PLAY";
  } else {
    audioInstance.play();
    e.target.textContent = "⏸ PAUSE";
  }
  isPlaying = !isPlaying;
});

// 4. LINK LAUNCHERS
document.querySelectorAll('.node-card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    window.open(url, '_blank');
  });
});