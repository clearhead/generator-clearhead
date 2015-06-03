;(function(){try{
var experimentId = _.id; // experiment id (this should be a number, not a string)
var chDimension = _.cv; // 1,2,3,4,5 (this should be a number, not a string)
window.clearhead = window.clearhead || {};
window.clearhead.gtm = window.clearhead.gtm || {};
Object.defineProperty(window.clearhead.gtm, 'ab' + chDimension, {
  get: function() {
    var name, val; try {
    name = window.optimizely.data.experiments[experimentId].name;
    val = window.optimizely.variationNamesMap[experimentId];
  }catch (e) {}
  return (name && val) ? name+': '+val:undefined;
 }
});
}catch(e){}})();
