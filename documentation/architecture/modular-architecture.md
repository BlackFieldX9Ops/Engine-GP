# Arquitetura Modular do ENGINE-GP

## Separação de Responsabilidades

O projeto é organizado em módulos independentes com contratos claros:

1. **Engine Core** — Infraestrutura e ciclo de vida.
2. **Graphics Engine** — Renderização (WebGL 2.0).
3. **Physics Engine** — Simulação física.
4. **Animation Engine** — Animações.
5. **Audio Engine** — Áudio.
6. **Input System** — Entrada.
7. **Scene System** — Cenas, objetos e componentes.
8. **Asset Pipeline** — Gerenciamento de recursos.
9. **Editor GP** — Interface visual (separada).
10. **Game Runtime** — Execução independente.
11. **Build & Export** — Empacotamento.
12. **Plugin System** — Extensibilidade.

## Comunicação

- Via interfaces e eventos.
- Editor acessa apenas APIs públicas do motor.
- Runtime carrega projetos e cenas sem depender do editor.

## Preparação para 3D

- Graphics e Physics possuem camadas `common`, `2d` e `3d` (3d apenas placeholder nesta etapa).
- Interfaces comuns definidas onde há responsabilidades compartilhadas.

## Regras

- Sem dependências circulares.
- Sem acoplamento excessivo.
- Documentação diferencia arquitetura planejada de sistemas implementados.
