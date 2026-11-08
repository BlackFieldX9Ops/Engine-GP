# ENGINE-GP

**Visão:** motor gráfico próprio, independente e original.

## Fases de Desenvolvimento

- **Fase 1:** HTML5 — motor 2D.
- **Fase 2:** Android e computador.
- **Fase 3:** evolução para 3D.

## Desenvolvimento

Grok como agente de programação, com GitHub para versionamento e ambiente de desenvolvimento no navegador.

## Stack

| Tecnologia | Responsabilidade |
|------------|------------------|
| JavaScript (ES2025+) | Programação do motor gráfico |
| HTML5 | Estrutura e execução dos jogos |
| CSS3 | Interface e ferramentas visuais |
| WebGL 2.0 | Renderização gráfica acelerada por GPU |
| GLSL ES 3.00 | Shaders e efeitos gráficos |
| JSON | Configurações, cenas e dados dos jogos |

## Estrutura do Repositório

A fundação arquitetural foi criada. Consulte a documentação em `documentation/` para detalhes completos.

Principais pastas:

- `documentation/` — Documentação técnica arquitetural.
- `engine/` — Sistemas do motor (core, graphics, physics, etc.).
- `editor/` — Editor visual GP.
- `runtime/` — Runtime independente.
- `src/` — Entry point de demonstração existente (legado).

## Status Atual

- Fundação estrutural e documentacional criada.
- Sistemas funcionais ainda não implementados (apenas skeletons fundamentais onde necessário).
- Próxima etapa recomendada: implementar o Game Loop robusto e o Renderer 2D com batching.

## Como Testar a Demonstração Atual

Abra `index.html` em um navegador moderno (com suporte a WebGL 2.0).
