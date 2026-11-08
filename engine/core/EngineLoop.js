/**
 * EngineLoop
 * Game Loop controlado, com pausa, resume, delta time e prevenção de loops duplicados.
 * Seguro para ambientes sem requestAnimationFrame (testes Node).
 */
import { Logger } from '../utils/Logger.js';

const hasRAF = typeof requestAnimationFrame === 'function';

export class EngineLoop {
  constructor(engine) {
    this.engine = engine;
    this.running = false;
    this.paused = false;
    this._rafId = null;
    this._boundLoop = this._loop.bind(this);
  }

  start() {
    if (this.running) {
      Logger.warn('Loop already running', 'EngineLoop');
      return;
    }
    this.running = true;
    this.paused = false;
    this.engine.time.reset(typeof performance !== 'undefined' ? performance.now() : Date.now());
    Logger.log('Loop started', 'EngineLoop');
    if (hasRAF) {
      this._rafId = requestAnimationFrame(this._boundLoop);
    }
  }

  stop() {
    if (!this.running) return;
    this.running = false;
    this.paused = false;
    if (this._rafId !== null && hasRAF) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
    Logger.log('Loop stopped', 'EngineLoop');
  }

  pause() {
    if (!this.running || this.paused) return;
    this.paused = true;
    Logger.log('Loop paused', 'EngineLoop');
  }

  resume() {
    if (!this.running || !this.paused) return;
    this.paused = false;
    this.engine.time.lastTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
    Logger.log('Loop resumed', 'EngineLoop');
  }

  _loop(time) {
    if (!this.running) return;

    this.engine.time.update(time);

    if (!this.paused) {
      const fixedSteps = this.engine.time.consumeFixedSteps();
      for (const dt of fixedSteps) {
        this.engine.fixedUpdate(dt);
      }
      this.engine.update(this.engine.time.deltaTime);
      this.engine.render();
    }

    if (hasRAF) {
      this._rafId = requestAnimationFrame(this._boundLoop);
    }
  }
}
