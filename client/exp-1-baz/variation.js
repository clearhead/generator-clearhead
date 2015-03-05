/* _optimizely_evaluate=force */ /*global $*/
/*--------------------------------------------
 *
 *  test name: exp-1-baz
 *  test platform: optimizely
 *  test plan: http://www.example.com/exp1plan.pdf
 *  author: tom@clearhead.me
 *  notes:
 *    - valid for: {{urls}}
 *    - assumes {{tbd}}
 *
 * ------------------------------------------*/
$('html').addClass('clearhead-exp-1');
$.extend(window['optimizelyExp1'], {
  headlineText: 'New Headline',
  moveUp: function () {
    $(this).insertBefore($('h1'));
  }
};
/* _optimizely_evaluate=safe */
$('h1').text(window['optimizelyExp1'].headlineText);
$('h2').each(window['optimizelyExp1'].moveUp);
