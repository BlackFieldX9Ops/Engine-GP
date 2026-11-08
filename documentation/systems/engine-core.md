# Engine Core — Implementado (Fase 1)

## Sistemas

- **Engine.js** — Ciclo de vida, inicialização, integração com sistemas centrais.
- **EngineLoop.js** — Game Loop com pausa, resume, delta time e prevenção de loops duplicados.
- **Time.js** — Delta time, elapsed, FPS, fixed/variable update.
- **EventSystem.js** — Eventos com múltiplos ouvintes, remoção segura e clear.
- **EngineConfig.js** — Configurações com validação e overrides.
- **Logger.js** — Logs com níveis e origem.

## Integração

O Engine controla o ciclo de vida. O Loop usa Time. Eventos permitem comunicação. Logger registra acontecimentos.

## Testes

Testes unitários em `tests/core/` cobrem inicialização, loop, tempo, eventos e configuração.

## Status

**Fase 1 — CORE: Implementado e testado.**

Pronto para receber o Renderer na próxima etapa.
