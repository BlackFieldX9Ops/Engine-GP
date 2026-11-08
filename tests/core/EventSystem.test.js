/**
 * Tests for EventSystem.js
 */
import { EventSystem } from '../../engine/core/EventSystem.js';

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

const events = new EventSystem();
let count = 0;

const off = events.on('test', (data) => {
  count += data;
});

events.emit('test', 5);
assert(count === 5, 'Event should fire');

events.emit('test', 3);
assert(count === 8, 'Event should fire again');

off();
events.emit('test', 10);
assert(count === 8, 'Event should not fire after off');

// Multiple listeners
let a = 0, b = 0;
events.on('multi', () => a++);
events.on('multi', () => b++);
events.emit('multi');
assert(a === 1 && b === 1, 'Multiple listeners should fire');

events.clear();
events.emit('multi');
assert(a === 1 && b === 1, 'Clear should remove all listeners');

console.log('EventSystem tests passed');
