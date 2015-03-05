$(function () {
  var EXPERIMENT_ID = 'TODO';
  var CUSTOM_VAR = 'TODO';
  if (window.optimizely && window.optimizely.variationMap.hasOwnProperty(EXPERIMENT_ID)) {
    window._gaq = window._gaq || [];
    window._gaq.push(['_setCustomVar', CUSTOM_VAR, window.optimizely.data.experiments[EXPERIMENT_ID].name, window.optimizely.variationNamesMap[EXPERIMENT_ID], 1]);
    window._gaq.push(['_trackEvent', 'Optimizely', window.optimizely.data.experiments[EXPERIMENT_ID].name, window.optimizely.variationNamesMap[EXPERIMENT_ID], 0, true]);
  }
});
