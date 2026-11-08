/**
 * Tests for Time.js
 * Run with: node --experimental-vm-modules tests/core/Time.test.js
 * (or integrate with a test runner later)
 */
import { Time } from '../../engine/core/Time.js';
import { EngineConfig } from '../../engine/core/EngineConfig.js';

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

const config = new EngineConfig({ maxDelta: 0.1, fixedDelta: 1/60 });
const time = new Time(config);

// Test reset and update
time.reset(1000);
assert(time.deltaTime === 0, 'deltaTime should be 0 after reset');
assert(time.elapsed === 0, 'elapsed should be 0 after reset');

time.update(1100);
assert(Math.abs(time.deltaTime - 0.1) < 0.001, 'deltaTime should be ~0.1');
assert(Math.abs(time.elapsed - 0.1) < 0.001, 'elapsed should be ~0.1');

// Max delta clamp
time.update(2000);
assert(time.deltaTime === 0.1, 'deltaTime should be clamped to maxDelta');

// Fixed steps
time.fixedAccumulator = 0.05;
time.update(time.lastTime + 20);
const steps = time.consumeFixedSteps();
assert(steps.length >= 1, 'Should produce fixed steps');

console.log('Time tests passed');
