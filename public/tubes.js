export async function initTubes(container) {
  // We fetch the engine from the cloud (CDN) to keep your project lightweight
  const mod = await import(
    /* webpackIgnore: true */
    "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
  );
  const TubesCursorCtor = mod.default ?? mod;

  // Create a canvas element inside the container we provided
  const canvas = document.createElement('canvas');
  canvas.className = "fixed inset-0 block h-full w-full z-0";
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

  // Randomize on click logic
  document.body.addEventListener("click", () => {
    const randomHex = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    app.tubes.setColors([randomHex(), randomHex(), randomHex()]);
  });
}