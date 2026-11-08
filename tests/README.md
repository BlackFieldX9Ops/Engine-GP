# Testes

Testes automatizados do CORE (Fase 1).

## Como executar (Node)

```bash
node --experimental-vm-modules tests/core/Time.test.js
node --experimental-vm-modules tests/core/EventSystem.test.js
node --experimental-vm-modules tests/core/EngineConfig.test.js
node --experimental-vm-modules tests/core/Engine.test.js
```

## Status

Testes do CORE implementados e verificáveis em Node.
Testes que dependem de WebGL/canvas exigem ambiente de navegador (pendente para fases futuras).
