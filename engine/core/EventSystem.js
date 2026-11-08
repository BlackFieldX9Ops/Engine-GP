/**
 * EventSystem
 * Sistema central de eventos com suporte a múltiplos ouvintes e remoção segura.
 */
export class EventSystem {
  constructor() {
    this.listeners = new Map();
  }

  on(event, callback) {
    if (typeof callback !== 'function') throw new Error('Callback must be a function');
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    this.listeners.get(event).add(callback);
    return () => this.off(event, callback);
  }

  off(event, callback) {
    const set = this.listeners.get(event);
    if (set) {
      set.delete(callback);
      if (set.size === 0) this.listeners.delete(event);
    }
  }

  emit(event, data) {
    const set = this.listeners.get(event);
    if (!set) return;
    // Cópia para evitar problemas se ouvintes forem removidos durante o emit
    for (const cb of [...set]) {
      try {
        cb(data);
      } catch (err) {
        console.error(`Event handler error for "${event}":`, err);
      }
    }
  }

  clear() {
    this.listeners.clear();
  }
}
