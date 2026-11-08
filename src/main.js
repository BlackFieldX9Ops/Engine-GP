import { Engine } from '../engine/core/Engine.js';

const canvas = document.getElementById('game');
const engine = new Engine(canvas);

engine.start();

// Demo: draw some colored quads every frame
engine.events.on('engine:render', () => {
  if (!engine.renderer) return;

  const w = canvas.width;
  const h = canvas.height;

  engine.renderer.begin();

  // Background accent
  engine.renderer.drawQuad(0, 0, w, h, 0.035, 0.031, 0.059, 1);

  // Neon violet
  engine.renderer.drawQuad(w * 0.2, h * 0.3, 200, 200, 0.545, 0.361, 0.965, 1);

  // Electric cyan
  engine.renderer.drawQuad(w * 0.5, h * 0.4, 180, 180, 0.133, 0.827, 0.933, 1);

  // Moving quad
  const t = engine.time.elapsed;
  const x = w * 0.3 + Math.sin(t * 2) * 150;
  const y = h * 0.6 + Math.cos(t * 1.5) * 80;
  engine.renderer.drawQuad(x, y, 120, 120, 1, 0.4, 0.7, 1);

  engine.renderer.end();
});
