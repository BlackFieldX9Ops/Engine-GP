/**
 * ENGINE-GP Core Engine
 *
 * Responsabilidade: inicialização do motor, ciclo de vida, coordenação de módulos.
 *
 * Status: Skeleton fundamental. Evolui a partir do Engine.js existente em src/core/.
 * Não contém implementação completa de sistemas nesta etapa.
 */
export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = null;
    this.running = false;
    this.lastTime = 0;

    this.initialize();
  }

  initialize() {
    if (this.canvas) {
      this.gl = this.canvas.getContext('webgl2', {
        antialias: false,
        alpha: false,
        depth: false,
        stencil: false,
        preserveDrawingBuffer: false
      });

      if (!this.gl) {
        throw new Error('WebGL 2.0 não suportado');
      }
    }

    // TODO: Inicializar módulos (ResourceManager, EventSystem, etc.)
  }

  start() {
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  loop(time) {
    if (!this.running) return;

    const dt = (time - this.lastTime) / 1000;
    this.lastTime = time;

    this.update(dt);
    this.render();

    requestAnimationFrame((t) => this.loop(t));
  }

  update(dt) {
    // TODO: Atualizar sistemas (scene, physics, animation, input, etc.)
  }

  render() {
    if (!this.gl) return;
    this.gl.clearColor(0.035, 0.031, 0.059, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    // TODO: Delegar ao Graphics Renderer
  }

  stop() {
    this.running = false;
  }
}
