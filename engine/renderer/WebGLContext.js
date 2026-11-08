/**
 * WebGLContext
 * Criação e configuração do contexto WebGL 2.
 * Status: Skeleton.
 */
export class WebGLContext {
  static create(canvas) {
    const gl = canvas.getContext('webgl2', {
      antialias: false,
      alpha: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false
    });
    if (!gl) throw new Error('WebGL 2.0 não suportado');
    return gl;
  }
}
