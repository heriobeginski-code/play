export async function initTubes(container) {
  const mod = await import(
    /* webpackIgnore: true */
    "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
  );
  const TubesCursorCtor = mod.default ?? mod;

  const canvas = document.createElement('canvas');
  
  // FORCE FULL SCREEN: 
  // This ensures the canvas is "stuck" to the back and fills every pixel
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.display = "block";
  canvas.style.zIndex = "-1"; // Puts it BEHIND your text/buttons
  
  container.appendChild(canvas);

  const app = TubesCursorCtor(canvas, {
    tubes: {
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      lights: {
        intensity: 250,
        colors: ["#ffff00", "#ff00ff", "#00ffff", "#ffffff"],
      },
    },
  });

  // Handle Window Resizing
  // Without this, the tubes might look "stretched" if you resize the browser
  window.addEventListener("resize", () => {
    app.resize?.(); 
  });

  document.body.addEventListener("click", () => {
    const randomHex = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    app.tubes.setColors([randomHex(), randomHex(), randomHex()]);
  });
}