/**
 * Time
 * Gerenciamento de tempo e delta time.
 * Status: Skeleton.
 */
export class Time {
  constructor() {
    this.deltaTime = 0;
    this.elapsed = 0;
    this.lastTime = 0;
  }

  update(currentTime) {
    this.deltaTime = (currentTime - this.lastTime) / 1000;
    this.elapsed += this.deltaTime;
    this.lastTime = currentTime;
  }
}
