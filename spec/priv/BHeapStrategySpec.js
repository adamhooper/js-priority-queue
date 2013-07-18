(function() {
  require(['priv/BHeapStrategy'], function(BHeapStrategy) {
    return StrategyHelper.describeStrategy('B-Heap strategy', BHeapStrategy);
  });

}).call(this);
