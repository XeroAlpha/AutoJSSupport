# Auto.js支持库

考虑到[Auto.js](https://github.com/hyb1996/Auto.js)已经很久未commit，特编写本支持库来添加新的特性。

目前已支持功能：
- console的time、timeEnd、trace函数

## 如何使用

如果您只需要在一个脚本文件中使用本支持包，您只需要将 `support.js` 中的内容拷贝到脚本的开头即可。

如果您需要在多个脚本文件中使用本支持包，请做以下步骤：
1. 将本项目中的 `support.js` 拷贝到您需要使用支持包的项目的根目录。
2. 在每个需要支持包的脚本的开头加上： 
```js
var support = require('./support.js'); // 此处填写support.js相对于这个脚本的路径
```

## console.time(label)
* `label` {String} 计时器标签

启动一个定时器，用以计算一个操作的持续时间。
定时器由一个唯一的 `label` 标识。
当调用 `console.timeEnd()` 时，可以使用相同的 `label` 来停止定时器，并以毫秒为单位将持续时间输出到控制台。
重复启动同一个标签的定时器会覆盖之前启动同一标签的定时器。

## console.timeEnd(label)
* `label` {String} 计时器标签

停止之前通过调用 `console.time()` 启动的定时器，并打印结果到控制台。
调用 `console.timeEnd()` 后定时器会被删除。如果不存在标签指定的定时器则会打印 `NaNms`。
```js
console.time('sleep-100ms');
sleep(100);
console.timeEnd('sleep-100ms');
// 打印 sleep-100ms: 100ms
```

## console.trace(message)
* `message` {String} 要打印的信息

打印字符串 'Trace :' 到控制台，并通过 `util.format()` 格式化消息与堆栈跟踪在代码中的当前位置。

```js
console.trace('Show me');
// 打印: (堆栈跟踪会根据被调用的跟踪的位置而变化)
// Trace: Show me
//  at <test>:7
```