/**
 * Game Runtime
 *
 * Responsabilidade: executar jogos independentemente do Editor.
 *
 * Status: Skeleton fundamental. Não implementado nesta etapa.
 */
export class Runtime {
  constructor() {
    this.engine = null;
    this.running = false;
  }

  async loadProject(projectPath) {
    // TODO: Carregar configuração de projeto e cenas
  }

  start() {
    this.running = true;
    // TODO: Iniciar Game Loop via Engine
  }

  stop() {
    this.running = false;
  }
}
