/**
 * EngineLoop
 * Game Loop controlado, com pausa, delta time e prevenção de loops duplicados.
 */
import { Logger } from '../utils/Logger.js';

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
    this.engine.time.reset(performance.now());
    Logger.log('Loop started', 'EngineLoop');
    this._rafId = requestAnimationFrame(this._boundLoop);
  }

  stop() {
    if (!this.running) return;
    this.running = false;
    this.paused = false;
    if (this._rafId !== null) {
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
    this.engine.time.lastTime = performance.now();
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

    this._rafId = requestAnimationFrame(this._boundLoop);
  }
}
