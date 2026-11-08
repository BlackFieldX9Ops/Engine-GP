/**
 * Engine
 * Classe principal do motor. Controla ciclo de vida, sistemas centrais e integração.
 */
import { EngineConfig } from './EngineConfig.js';
import { Time } from './Time.js';
import { EventSystem } from './EventSystem.js';
import { EngineLoop } from './EngineLoop.js';
import { Logger } from '../utils/Logger.js';
import { Renderer } from '../renderer/Renderer.js';

export class Engine {
  constructor(canvas = null, configOverrides = {}) {
    this.canvas = canvas;
    this.config = new EngineConfig(configOverrides);
    this.time = new Time(this.config);
    this.events = new EventSystem();
    this.loop = new EngineLoop(this);
    this.gl = null;
    this.renderer = null;
    this._initialized = false;
    this._destroyed = false;

    Logger.log('Engine created', 'Engine');
  }

  initialize() {
    if (this._initialized) {
      Logger.warn('Engine already initialized', 'Engine');
      return;
    }
    if (this._destroyed) throw new Error('Cannot initialize a destroyed Engine');

    try {
      if (this.canvas) {
        this.gl = this.canvas.getContext('webgl2', {
          antialias: this.config.antialias,
          alpha: this.config.alpha,
          depth: this.config.depth,
          stencil: this.config.stencil,
          preserveDrawingBuffer: this.config.preserveDrawingBuffer
        });
        if (!this.gl) throw new Error('WebGL 2.0 not supported');
        this.gl.clearColor(...this.config.clearColor);
        this.renderer = new Renderer(this.gl);
        this._resize();
        window.addEventListener('resize', () => this._resize());
      }

      this.events.emit('engine:initialized', { engine: this });
      this._initialized = true;
      Logger.log('Engine initialized', 'Engine');
    } catch (err) {
      Logger.error(`Initialization failed: ${err.message}`, 'Engine');
      throw err;
    }
  }

  _resize() {
    if (!this.canvas || !this.gl || !this.renderer) return;
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.renderer.setProjection(this.canvas.width, this.canvas.height);
  }

  start() {
    if (!this._initialized) this.initialize();
    if (this._destroyed) throw new Error('Cannot start a destroyed Engine');
    this.loop.start();
    this.events.emit('engine:started', { engine: this });
  }

  stop() {
    this.loop.stop();
    this.events.emit('engine:stopped', { engine: this });
  }

  pause() {
    this.loop.pause();
    this.events.emit('engine:paused', { engine: this });
  }

  resume() {
    this.loop.resume();
    this.events.emit('engine:resumed', { engine: this });
  }

  update(dt) {
    this.events.emit('engine:update', { dt, engine: this });
  }

  fixedUpdate(dt) {
    this.events.emit('engine:fixedUpdate', { dt, engine: this });
  }

  render() {
    if (this.gl) {
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    this.events.emit('engine:render', { engine: this });
  }

  destroy() {
    if (this._destroyed) return;
    this.stop();
    this.events.clear();
    this.gl = null;
    this.canvas = null;
    this.renderer = null;
    this._destroyed = true;
    this._initialized = false;
    Logger.log('Engine destroyed', 'Engine');
    this.events.emit('engine:destroyed', { engine: this });
  }
}
