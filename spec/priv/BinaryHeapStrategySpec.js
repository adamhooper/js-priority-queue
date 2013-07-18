(function() {
  require(['priv/BinaryHeapStrategy'], function(BinaryHeapStrategy) {
    return StrategyHelper.describeStrategy('Binary heap strategy', BinaryHeapStrategy);
  });

}).call(this);
