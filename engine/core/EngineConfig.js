/**
 * EngineConfig
 * Configurações globais do motor com valores padrão e validação.
 */
export class EngineConfig {
  constructor(overrides = {}) {
    this.antialias = false;
    this.alpha = false;
    this.depth = false;
    this.stencil = false;
    this.preserveDrawingBuffer = false;
    this.clearColor = [0.035, 0.031, 0.059, 1];
    this.targetFPS = 60;
    this.fixedDelta = 1 / 60;
    this.maxDelta = 0.1;

    Object.assign(this, overrides);
    this.validate();
  }

  validate() {
    if (typeof this.antialias !== 'boolean') throw new Error('antialias must be boolean');
    if (typeof this.targetFPS !== 'number' || this.targetFPS <= 0) throw new Error('targetFPS must be > 0');
    if (!Array.isArray(this.clearColor) || this.clearColor.length !== 4) throw new Error('clearColor must be [r,g,b,a]');
    if (typeof this.fixedDelta !== 'number' || this.fixedDelta <= 0) throw new Error('fixedDelta must be > 0');
    if (typeof this.maxDelta !== 'number' || this.maxDelta <= 0) throw new Error('maxDelta must be > 0');
  }
}
