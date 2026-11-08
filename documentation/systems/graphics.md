# Graphics Engine

Responsável pela renderização acelerada por GPU via WebGL 2.0.

## Organização

- `engine/graphics/common/` — Responsabilidades compartilhadas (shaders, materiais, texturas base).
- `engine/graphics/2d/` — Renderizador 2D, sprites, tilemaps, batching, câmeras 2D.
- `engine/graphics/3d/` — Placeholder para futura expansão (não implementado).

## Responsabilidades 2D

- Renderer 2D com batching agressivo.
- Sprites e texturas.
- Câmeras e camadas.
- Tilemaps.
- Materiais e shaders.
- Partículas e efeitos.

## Status

Estrutura preparada. Implementação do renderer 2D é prioridade da Fase 1. 3D reservado para fases futuras.
