/**
 * Logger
 * Sistema de logs com níveis e origem.
 */
export class Logger {
  static level = 'info'; // 'debug' | 'info' | 'warn' | 'error'

  static setLevel(level) {
    this.level = level;
  }

  static _shouldLog(level) {
    const order = { debug: 0, info: 1, warn: 2, error: 3 };
    return order[level] >= order[this.level];
  }

  static log(msg, source = 'CORE') {
    if (this._shouldLog('info')) console.log(`[ENGINE-GP][${source}]`, msg);
  }

  static debug(msg, source = 'CORE') {
    if (this._shouldLog('debug')) console.debug(`[ENGINE-GP][${source}]`, msg);
  }

  static warn(msg, source = 'CORE') {
    if (this._shouldLog('warn')) console.warn(`[ENGINE-GP][${source}]`, msg);
  }

  static error(msg, source = 'CORE') {
    if (this._shouldLog('error')) console.error(`[ENGINE-GP][${source}]`, msg);
  }
}
