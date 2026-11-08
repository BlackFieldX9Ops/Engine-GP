#version 300 es
precision highp float;

in vec2 v_uv;
in vec4 v_color;

out vec4 fragColor;

void main() {
  // Simple colored quad for now (texture support can be added later)
  fragColor = v_color;
}
