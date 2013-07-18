(function() {
  define(function() {
    var BinaryHeapStrategy;
    return BinaryHeapStrategy = (function() {
      function BinaryHeapStrategy(options) {
        this.comparator = (options != null ? options.comparator : void 0) || function(a, b) {
          return a - b;
        };
        this.length = 0;
        this.data = [];
      }

      BinaryHeapStrategy.prototype.queue = function(value) {
        this.data.push(value);
        this._bubbleUp(this.data.length - 1);
        return void 0;
      };

      BinaryHeapStrategy.prototype.dequeue = function() {
        var last, ret;
        ret = this.data[0];
        last = this.data.pop();
        if (this.data.length > 0) {
          this.data[0] = last;
          this._bubbleDown(0);
        }
        return ret;
      };

      BinaryHeapStrategy.prototype.peek = function() {
        return this.data[0];
      };

      BinaryHeapStrategy.prototype._bubbleUp = function(pos) {
        var parent, x;
        while (pos > 0) {
          parent = pos >>> 1;
          if (this.comparator(this.data[pos], this.data[parent]) < 0) {
            x = this.data[parent];
            this.data[parent] = this.data[pos];
            this.data[pos] = x;
            pos = parent;
          } else {
            pos = 0;
          }
        }
        return void 0;
      };

      BinaryHeapStrategy.prototype._bubbleDown = function(pos) {
        var left, minIndex, right, x;
        while (true) {
          left = pos << 1 + 1;
          right = left + 1;
          minIndex = pos;
          if (left < this.data.length && this.comparator(this.data[left], this.data[minIndex]) < 0) {
            minIndex = left;
          }
          if (right < this.data.length && this.comparator(this.data[right], this.data[minIndex]) < 0) {
            minIndex = right;
          }
          if (minIndex !== pos) {
            x = this.data[minIndex];
            this.data[minIndex] = this.data[pos];
            this.data[pos] = x;
            pos = minIndex;
          } else {
            break;
          }
        }
        return void 0;
      };

      return BinaryHeapStrategy;

    })();
  });

}).call(this);

/*
//@ sourceMappingURL=BinaryHeapStrategy.js.map
*/