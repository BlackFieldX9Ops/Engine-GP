/**
 * Tests for Engine.js (basic lifecycle, no canvas)
 */
import { Engine } from '../../engine/core/Engine.js';

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

const engine = new Engine(null, { targetFPS: 30 });
assert(engine.config.targetFPS === 30, 'Config applied');
assert(!engine._initialized, 'Not initialized yet');

engine.initialize();
assert(engine._initialized, 'Initialized');

let started = false;
engine.events.on('engine:started', () => started = true);
engine.start();
assert(started, 'Start event fired');
assert(engine.loop.running, 'Loop running');

engine.pause();
assert(engine.loop.paused, 'Paused');

engine.resume();
assert(!engine.loop.paused, 'Resumed');

engine.stop();
assert(!engine.loop.running, 'Stopped');

engine.destroy();
assert(engine._destroyed, 'Destroyed');

console.log('Engine tests passed');
