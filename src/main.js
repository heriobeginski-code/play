import './style.css';
import { initTubes } from './tubes.js';
import { initAudio } from './audio.js';

document.querySelector('#app').innerHTML = `
  <div id="canvas-wrapper"></div>
  
  <div class="container">
    <h1 style="color: var(--neon-blue); letter-spacing: 5px;">THE_GRID // PROTOCOLS</h1>
    
    <div class="protocol-grid">
      <div class="node-card" data-url="https://learn.mangolanguages.com/login">
        Language Protocol
      </div>
      <div class="node-card" data-url="https://www.khanacademy.org/math/">
        Mathematics
      </div>
      <div class="node-card" data-url="https://platform.outskill.com/">
        AI Specialization
      </div>
    </div>

    <div style="margin-top: 50px;">
       <button id="start-stream" style="background:none; border:1px solid #fff; color:#fff; padding:10px; cursor:pointer;">
         INITIALIZE AUDIO STREAM
       </button>
    </div>
  </div>
`;

// Start Visuals immediately
initTubes(document.querySelector('#canvas-wrapper'));

// Handle Link Launching
const cards = document.querySelectorAll('.node-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    window.open(url, '_blank');
  });
});

// Handle Audio (One-click to start the music)
document.querySelector('#start-stream').addEventListener('click', (e) => {
  initAudio('mystery'); // Starting with the 'mystery' vibe
  e.target.style.display = 'none'; // Hide button once stream starts
});