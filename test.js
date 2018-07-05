var support = require('./support');

console.time('sleep-100ms');
sleep(100);
console.timeEnd('sleep-100ms');

console.trace('Show Me');