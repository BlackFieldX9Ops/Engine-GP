/**
 * Renderer
 * Coordenador principal de renderização 2D.
 */
import { SpriteRenderer } from './SpriteRenderer.js';

export class Renderer {
  constructor(gl) {
    this.gl = gl;
    this.spriteRenderer = new SpriteRenderer(gl);
    this.projection = new Float32Array(16);
  }

  setProjection(width, height) {
    // Orthographic projection (0,0 bottom-left)
    const left = 0, right = width, bottom = 0, top = height, near = -1, far = 1;
    const m = this.projection;
    m[0] = 2 / (right - left); m[5] = 2 / (top - bottom); m[10] = -2 / (far - near); m[15] = 1;
    m[12] = -(right + left) / (right - left);
    m[13] = -(top + bottom) / (top - bottom);
    m[14] = -(far + near) / (far - near);
  }

  begin() {
    this.spriteRenderer.begin(this.projection);
  }

  drawQuad(x, y, w, h, r, g, b, a = 1) {
    this.spriteRenderer.drawQuad(x, y, w, h, r, g, b, a);
  }

  end() {
    this.spriteRenderer.end();
  }

  clear() {
    const gl = this.gl;
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
}
