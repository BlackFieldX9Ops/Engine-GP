/**
 * EngineLoop
 * Controle do Game Loop.
 * Status: Skeleton.
 */
export class EngineLoop {
  constructor(engine) {
    this.engine = engine;
    this.running = false;
  }

  start() {
    this.running = true;
    // TODO: requestAnimationFrame loop
  }

  stop() {
    this.running = false;
  }
}
