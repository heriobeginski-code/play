import './style.css';
import { initTubes } from './tubes.js';
import { initAudio } from './audio.js';

document.querySelector('#app').innerHTML = `
  <div id="canvas-wrapper"></div>
  <div class="overlay">
    <h1>SONIC TUBES</h1>
    <p>Click anywhere to shift reality</p>
    <button id="enter-btn">ENTER EXPERIENCE</button>
  </div>
`;

const enterBtn = document.querySelector('#enter-btn');
const wrapper = document.querySelector('#canvas-wrapper');

enterBtn.addEventListener('click', () => {
  // Remove the button and text
  document.querySelector('.overlay').style.display = 'none';
  
  // Start our specialists
  initTubes(wrapper);
  initAudio();
});