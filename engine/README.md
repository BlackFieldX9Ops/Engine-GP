# Engine

Sistemas centrais do motor gráfico ENGINE-GP.

## Departamentos

- `core/` — Infraestrutura, Game Loop, eventos, recursos, logs.
- `graphics/` — Renderização (common / 2d / 3d).
- `physics/` — Física.
- `animation/` — Animações.
- `audio/` — Áudio.
- `input/` — Entrada.
- `scene/` — Sistema de cenas e objetos.

## Comunicação

Módulos se comunicam via interfaces públicas e sistema de eventos. O Editor e o Runtime consomem estas APIs.

## Status

Fundação estrutural. Implementação dos sistemas é gradual (Fase 1 foca em core + graphics 2D).
