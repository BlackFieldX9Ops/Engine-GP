/**
 * SpriteRenderer
 * Renderização de sprites com batching agressivo.
 * Desenha quads coloridos (texturas serão adicionadas depois).
 */
export class SpriteRenderer {
  constructor(gl) {
    this.gl = gl;
    this.maxSprites = 10000;
    this.spriteCount = 0;

    this.vertices = new Float32Array(this.maxSprites * 4 * 8); // pos(2) + uv(2) + color(4)
    this.indices = new Uint16Array(this.maxSprites * 6);

    this._buildIndices();
    this._createBuffers();
    this._createShader();
    this._createVAO();
  }

  _buildIndices() {
    for (let i = 0; i < this.maxSprites; i++) {
      const offset = i * 6;
      const vertex = i * 4;
      this.indices[offset + 0] = vertex + 0;
      this.indices[offset + 1] = vertex + 1;
      this.indices[offset + 2] = vertex + 2;
      this.indices[offset + 3] = vertex + 0;
      this.indices[offset + 4] = vertex + 2;
      this.indices[offset + 5] = vertex + 3;
    }
  }

  _createBuffers() {
    const gl = this.gl;
    this.vbo = gl.createBuffer();
    this.ibo = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices.byteLength, gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
  }

  _createShader() {
    const gl = this.gl;
    const vert = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_uv;
layout(location = 2) in vec4 a_color;
uniform mat4 u_projection;
out vec2 v_uv;
out vec4 v_color;
void main() {
  gl_Position = u_projection * vec4(a_position, 0.0, 1.0);
  v_uv = a_uv;
  v_color = a_color;
}`;

    const frag = `#version 300 es
precision highp float;
in vec2 v_uv;
in vec4 v_color;
out vec4 fragColor;
void main() {
  fragColor = v_color;
}`;

    const vs = this._compile(gl.VERTEX_SHADER, vert);
    const fs = this._compile(gl.FRAGMENT_SHADER, frag);
    this.program = gl.createProgram();
    gl.attachShader(this.program, vs);
    gl.attachShader(this.program, fs);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(this.program));
    }
    this.uProjection = gl.getUniformLocation(this.program, 'u_projection');
  }

  _compile(type, source) {
    const gl = this.gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader));
    }
    return shader;
  }

  _createVAO() {
    const gl = this.gl;
    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);

    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 32, 0);
    // uv
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 32, 8);
    // color
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 4, gl.FLOAT, false, 32, 16);

    gl.bindVertexArray(null);
  }

  begin(projection) {
    this.spriteCount = 0;
    this.projection = projection;
  }

  drawQuad(x, y, w, h, r, g, b, a = 1) {
    if (this.spriteCount >= this.maxSprites) return;

    const i = this.spriteCount * 32;
    const verts = this.vertices;

    // Bottom-left
    verts[i + 0] = x;     verts[i + 1] = y;
    verts[i + 2] = 0;     verts[i + 3] = 0;
    verts[i + 4] = r;     verts[i + 5] = g; verts[i + 6] = b; verts[i + 7] = a;

    // Bottom-right
    verts[i + 8] = x + w; verts[i + 9] = y;
    verts[i + 10] = 1;    verts[i + 11] = 0;
    verts[i + 12] = r;    verts[i + 13] = g; verts[i + 14] = b; verts[i + 15] = a;

    // Top-right
    verts[i + 16] = x + w; verts[i + 17] = y + h;
    verts[i + 18] = 1;     verts[i + 19] = 1;
    verts[i + 20] = r;     verts[i + 21] = g; verts[i + 22] = b; verts[i + 23] = a;

    // Top-left
    verts[i + 24] = x;     verts[i + 25] = y + h;
    verts[i + 26] = 0;     verts[i + 27] = 1;
    verts[i + 28] = r;     verts[i + 29] = g; verts[i + 30] = b; verts[i + 31] = a;

    this.spriteCount++;
  }

  end() {
    if (this.spriteCount === 0) return;

    const gl = this.gl;
    gl.useProgram(this.program);
    gl.uniformMatrix4fv(this.uProjection, false, this.projection);

    gl.bindVertexArray(this.vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices.subarray(0, this.spriteCount * 32));

    gl.drawElements(gl.TRIANGLES, this.spriteCount * 6, gl.UNSIGNED_SHORT, 0);
    gl.bindVertexArray(null);
  }
}
