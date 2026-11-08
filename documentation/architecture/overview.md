# ENGINE-GP — Visão Geral

## Identidade

**ENGINE-GP** é um motor gráfico próprio, independente e original.

Objetivo: fornecer uma fundação profissional para desenvolvimento de jogos 2D, com arquitetura preparada para expansão futura para 3D, incluindo editor visual integrado, runtime independente e ecossistema de ferramentas.

## Princípios Arquiteturais

- Arquitetura modular com separação clara de responsabilidades.
- Runtime independente do Editor.
- Comunicação via interfaces e APIs bem definidas.
- Preparação para 3D sem comprometer o foco 2D inicial.
- Sem dependências circulares.
- Editor não acessa detalhes privados do motor.

## Stack Oficial

| Tecnologia | Responsabilidade |
|------------|------------------|
| JavaScript (ES2025+) | Implementação do motor e editor |
| HTML5 | Estrutura e execução |
| CSS3 | Interface e componentes visuais |
| WebGL 2.0 | Renderização GPU |
| GLSL ES 3.00 | Shaders |
| JSON | Configurações, metadados e dados de cenas |

## Fases

1. **Fase 1**: HTML5 — Motor 2D + Editor básico.
2. **Fase 2**: Android e Desktop.
3. **Fase 3**: Evolução para 3D.

## Status Atual

- Fundação estrutural e documentacional em construção.
- Sistemas funcionais ainda não implementados (apenas esqueletos onde necessário).
