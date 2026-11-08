# Arquitetura do ENGINE-GP

Consulte também os documentos detalhados em `documentation/architecture/`.

## Visão Geral

Motor gráfico modular, com Runtime independente do Editor, preparado para evolução de 2D para 3D.

## Departamentos Principais

- **engine/** — Sistemas do motor (core, renderer, scene, physics, input, audio, assets, animation, scripting, utils).
- **editor/** — Editor visual.
- **runtime/** — Execução independente de jogos.
- **export/** — Empacotamento e exportação.
- **documentation/** — Documentação técnica.

## Princípios

- Separação de responsabilidades.
- Comunicação via APIs públicas e eventos.
- Sem dependências circulares.
- Preparação para 3D sem implementar 3D nesta etapa.
