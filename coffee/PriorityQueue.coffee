define [
  './priv/AbstractPriorityQueue'
  './priv/ArrayStrategy'
  './priv/BinaryHeapStrategy'
  './priv/BHeapStrategy'
], (
  AbstractPriorityQueue
  ArrayStrategy,
  BinaryHeapStrategy,
  BHeapStrategy
) ->
  class PriorityQueue extends AbstractPriorityQueue
    constructor: (options) ->
      options ||= {}
      options.strategy ||= BinaryHeapStrategy
      options.comparator ||= (a, b) -> (a || 0) - (b || 0)
      super(options)

  PriorityQueue.ArrayStrategy = ArrayStrategy
  PriorityQueue.BinaryHeapStrategy = BinaryHeapStrategy
  PriorityQueue.BHeapStrategy = BHeapStrategy

  PriorityQueue
