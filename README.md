Priority Queue
==============

A priority queue is a data structure with these operations:

| Operation | Syntax (js-priority-queue) | Description |
| --------- | --- | ----------- |
| Create | `var queue = new PriorityQueue();` | Creates a priority queue |
| Queue | `queue.queue(value);` | Inserts a new value in the queue |
| Length | `var length = queue.length;` | Returns the number of elements in the queue |
| Peek | `var firstItem = queue.peek();` | Returns the smallest item in the queue and leaves the queue unchanged |
| Dequeue | `var firstItem = queue.dequeue();` | Returns the smallest item in the queue and removes it from the queue |
| Clear | `queue.clear();` | Removes all values from the queue |

You cannot access the data in any other way: you must dequeue or peek.

Why use this library? Two reasons:

1. It's easier to use than an Array, and it's clearer.
2. It can make your code execute more quickly.

Installing
==========

You can `npm install js-priority-queue` or `bower install js-priority-queue`.
Alternatively, just download `priority-queue.js` from this directory.

Include it through [RequireJS](http://requirejs.org/) or
[Browserify](http://browserify.org). Or, to pollute your global scope, insert
this in your HTML:

```html
<script src="priority-queue.js"></script>
```

Then write code like this:

```js
var queue = new PriorityQueue({ comparator: function(a, b) { return b - a; }});
queue.queue(5);
queue.queue(3);
queue.queue(2);
var lowest = queue.dequeue(); // returns 5
```

Options
=======

How exactly will these elements be ordered? Let's use the `comparator` option.
This is the argument we would pass to
[Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort):

```js
var compareNumbers = function(a, b) { return a - b; };
var queue = new PriorityQueue({ comparator: compareNumbers });
```

You can also pass initial values, in any order. With lots of values, it's
faster to load them all at once than one at a time.

```js
var queue = new PriorityQueue({ initialValues: [ 1, 2, 3 ] })
```

Strategies
==========

We can implement this with a regular `Array`. We'll keep it sorted inversely,
so `queue.dequeue()` maps to `array.pop()`. Each `queue()` is a `splice()`,
which rewrites the entire array. This is fast for tiny queues.

An alternative is a [Binary Heap](http://en.wikipedia.org/wiki/Binary_heap): it
modifies just a few array elements when queueing (though each modification has
a cost).

Finally, we can use a [B-Heap](http://en.wikipedia.org/wiki/B-heap). It's like a
binary heap, except its modifications often occur close together in memory.
Unfortunately, calculating _where_ in memory the modifications should occur is
slower. (It costs a function call instead of a bit-shift.) So while B-heap is
fast in theory, it's slow in practice.

Create the queues like this:

```js
var queue = new PriorityQueue({ strategy: PriorityQueue.ArrayStrategy }); // Array
var queue = new PriorityQueue({ strategy: PriorityQueue.BinaryHeapStrategy }); // Default
var queue = new PriorityQueue({ strategy: PriorityQueue.BHeapStrategy }); // Slower
```

You'll see running times like this:

| Operation | Array | Binary heap | B-Heap |
| --------- | ----- | ----------- | -------------- |
| Create | O(n lg n) | O(n) | O(n) |
| Queue | O(n) (often slow) | O(lg n) (fast) | O(lg n) |
| Peek | O(1) | O(1) | O(1) |
| Dequeue | O(1) (fast) | O(lg n) | O(lg n) |

According to [JsPerf](http://jsperf.com/js-priority-queue-queue-dequeue), the
fastest strategy for most cases is `BinaryHeapStrategy`. Use `ArrayStrategy`
in edge cases, after performance-testing your specific data. Don't use
`BHeapStrategy`: it's a lesson that a miracle in C can flop in JavaScript.

The default strategy is `BinaryHeapStrategy`.

Contributing
============

1. Fork this repository
2. Run `npm install`
3. Write the behavior you expect in `spec-coffee/`
4. Edit files in `coffee/` until `gulp test` says you're done
5. Run `gulp` to update `priority-queue.js` and `priority-queue.min.js`
6. Submit a pull request

License
=======

I, Adam Hooper, the sole author of this project, waive all my rights to it and
release it under the [Public
Domain](http://creativecommons.org/publicdomain/zero/1.0/). Do with it what you
will.
