/**
 * Tests for EngineConfig.js
 */
import { EngineConfig } from '../../engine/core/EngineConfig.js';

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

const cfg = new EngineConfig();
assert(cfg.antialias === false, 'Default antialias');
assert(cfg.targetFPS === 60, 'Default targetFPS');

const custom = new EngineConfig({ targetFPS: 30, antialias: true });
assert(custom.targetFPS === 30, 'Override works');
assert(custom.antialias === true, 'Override works');

try {
  new EngineConfig({ targetFPS: -1 });
  throw new Error('Should have thrown');
} catch (e) {
  assert(e.message.includes('targetFPS'), 'Validation works');
}

console.log('EngineConfig tests passed');
