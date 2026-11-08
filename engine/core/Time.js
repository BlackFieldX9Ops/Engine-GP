/**
 * Time
 * Gerenciamento de tempo: delta, elapsed, FPS, fixed/variable update.
 */
export class Time {
  constructor(config) {
    this.config = config;
    this.deltaTime = 0;
    this.elapsed = 0;
    this.lastTime = 0;
    this.fps = 0;
    this.frameCount = 0;
    this.fpsAccumulator = 0;
    this.fpsTime = 0;
    this.fixedAccumulator = 0;
  }

  reset(now = performance.now()) {
    this.lastTime = now;
    this.elapsed = 0;
    this.deltaTime = 0;
    this.fps = 0;
    this.frameCount = 0;
    this.fpsAccumulator = 0;
    this.fpsTime = 0;
    this.fixedAccumulator = 0;
  }

  update(currentTime) {
    const rawDelta = (currentTime - this.lastTime) / 1000;
    this.deltaTime = Math.min(rawDelta, this.config.maxDelta);
    this.lastTime = currentTime;
    this.elapsed += this.deltaTime;

    this.frameCount++;
    this.fpsAccumulator += this.deltaTime;
    this.fpsTime += this.deltaTime;

    if (this.fpsTime >= 1) {
      this.fps = Math.round(this.frameCount / this.fpsTime);
      this.frameCount = 0;
      this.fpsTime = 0;
    }

    this.fixedAccumulator += this.deltaTime;
  }

  consumeFixedSteps() {
    const steps = [];
    while (this.fixedAccumulator >= this.config.fixedDelta) {
      steps.push(this.config.fixedDelta);
      this.fixedAccumulator -= this.config.fixedDelta;
    }
    return steps;
  }
}
