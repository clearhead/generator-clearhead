$(function () {
  var EXPERIMENT_ID = $['exp<%=idx%>'].id;
  var CUSTOM_VAR = $['exp<%=idx%>'].cv;
  if (window.optimizely &&
    window.optimizely.variationMap.hasOwnProperty(EXPERIMENT_ID) &&
    window.ga && typeof ga === 'function') {
    window.ga('set', 'dimension' + CUSTOM_VAR,
      window.optimizely.data.experiments[EXPERIMENT_ID].name + ': ' +
      window.optimizely.variationNamesMap[EXPERIMENT_ID]);
    window.ga('send', 'event', 'optimizely',
      window.optimizely.data.experiments[EXPERIMENT_ID].name,
      window.optimizely.variationNamesMap[EXPERIMENT_ID], {
        'nonInteraction': 1
      });
  }
});
