/*
    Auto.js Support Library
    Copyright (C) 2018  ProjectXero
    E-mail: projectxero@163.com

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see [http://www.gnu.org/licenses/].
*/

/*
    Usage:
    var support = require('./support');
*/

var timers = {}, ascu = android.os.SystemClock.uptimeMillis;
console.time = function(label) {
    timers[label] = ascu();
};
console.timeEnd = function(label) {
    var result = ascu() - timers[label];
    delete timers[label];
    console.log(label + ": " + result + "ms");
};
console.trace = function captureStack(msg) {
    var k = {};
    Error.captureStackTrace(k, captureStack);
    console.log("Trace: " + msg + "\n" + k.stack);
};
