/**
 * Renderer
 * Coordenador principal de renderização.
 * Status: Skeleton.
 */
export class Renderer {
  constructor(gl) {
    this.gl = gl;
  }

  clear() {
    if (!this.gl) return;
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  render() {
    // TODO: Delegar ao SpriteRenderer e outros
  }
}
