(function() {
  require(['priv/ArrayStrategy'], function(ArrayStrategy) {
    return StrategyHelper.describeStrategy('Sorted Array strategy', ArrayStrategy);
  });

}).call(this);
