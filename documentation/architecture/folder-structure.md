# Estrutura de Pastas do ENGINE-GP

Esta documentação descreve a organização física planejada e implementada do repositório.

## Organização de Alto Nível

```
ENGINE-GP/
├── documentation/          # Documentação técnica
├── engine/                 # Sistemas do motor (core, graphics, physics, etc.)
├── editor/                 # Editor visual GP
├── runtime/                # Runtime independente de jogos
├── graphics/               # (alternativa / detalhes gráficos)
├── tests/                  # Testes
├── tools/                  # Ferramentas de desenvolvimento
├── projects/               # Projetos de jogos de exemplo / usuário
├── configuration/          # Configurações globais
├── shaders/                # Shaders GLSL compartilhados
├── index.html              # Entry point de demonstração (existente)
├── package.json             # Configuração de ferramentas (mínima)
└── README.md
```

## Departamentos Principais

### engine/
Infraestrutura central e sistemas do motor.

- `engine/core/` — Inicialização, Game Loop, tempo, eventos, logs, configurações, gerenciamento de recursos.
- `engine/graphics/` — Renderização (common, 2d, 3d placeholder).
- `engine/physics/` — Física (common, 2d, 3d placeholder).
- `engine/animation/` — Animações.
- `engine/audio/` — Áudio.
- `engine/input/` — Sistema de entrada.
- `engine/scene/` — Sistema de cenas, objetos, componentes.

### editor/
Editor visual integrado.

- Módulos independentes: application, interface, panels, viewport, project-manager, scene-editor, inspectors, asset-manager, etc.
- Comunica-se com o motor apenas via APIs públicas.

### runtime/
Execução de jogos independentemente do editor.

### documentation/
Documentação arquitetural, de sistemas, editor, runtime, desenvolvimento e roadmap.

## Princípios de Organização

- Cada departamento possui responsabilidades claras.
- Dependências fluem de forma controlada (core não depende de editor).
- Preparação para 3D via pastas `common/`, `2d/`, `3d/`.
- Arquivos fundamentais contêm apenas o necessário para a fundação (skeletons + comentários de propósito).

## Status

Esta estrutura está sendo criada como fundação. Sistemas ainda não estão implementados.
