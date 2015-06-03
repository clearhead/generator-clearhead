/* _optimizely_evaluate=force */ /*global $*/
/*--------------------------------------------
 *
 *  test name: exp-1-foo
 *  test platform: optimizely
 *  test plan: ex.ly/plan.pdf
 *  author: tom@clearhead.me
 *  notes:
 *    - valid for: {{urls}}
 *    - assumes {{tbd}}
 *
 * ------------------------------------------*/
var _ = $['exp1'];
_.log('v1');
$('html').addClass('exp1');

_.$headline = $(_.timpl(function() {
  /*
  <div id="exp1"> {{text}} </div>
  */
}, {
  text: 'New Headline'
}));

_.moveUp = function(i, el) {
  _.log('moving h2 up to h1');
  try {
    var $h1 = $('h1');
    if ($h1.length) $(el).insertBefore($h1);
    else _.report('h1 not found');
  } catch (e) {
    _.report(e);
  }
};

/* _optimizely_evaluate=safe */
$('h1').replaceWith($['exp1'].$headline);
$('h2').each($['exp1'].moveUp);
