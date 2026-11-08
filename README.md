# ENGINE-GP

**Motor gráfico próprio, independente e original.**

ENGINE-GP é um motor gráfico 2D modular com editor visual integrado, construído com tecnologias web modernas e preparado para expansão futura para desktop e 3D.

## Stack Oficial

| Tecnologia | Responsabilidade |
|------------|------------------|
| JavaScript (ES2025+) | Implementação do motor e editor |
| HTML5 | Estrutura e execução |
| CSS3 | Interface e componentes visuais |
| WebGL 2.0 | Renderização acelerada por GPU |
| GLSL ES 3.00 | Shaders |
| JSON | Configurações, metadados e dados de cenas |
| Node.js | Ferramentas de desenvolvimento e build |

## Estrutura do Projeto

```
ENGINE-GP/
├── documentation/     # Documentação técnica
├── engine/            # Sistemas do motor
├── editor/            # Editor visual GP
├── runtime/           # Runtime independente
├── export/            # Empacotamento e exportação
├── projects/          # Projetos e templates
├── tests/             # Testes
├── public/            # Assets públicos
└── index.html         # Entry point de demonstração
```

## Status

**Fase 0 — Estrutura Zero: Concluída.**

A fundação organizacional e documental está estabelecida. Os sistemas funcionais serão implementados na Fase 1.

## Desenvolvimento

```bash
npm install
npm run dev
npm test
```

## Documentação

Consulte a pasta `documentation/` para detalhes de arquitetura, sistemas e roadmap.
