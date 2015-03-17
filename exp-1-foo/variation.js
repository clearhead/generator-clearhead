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
$('html').addClass('exp-1');
$['exp1'].log('v1');

$.extend($['exp1'], {
  data: {text: 'New Headline'},
  headline: function () {
    this.log('headline');
    return this.htmlHeredoc(function () {/*
      <div id="exp-1">
        {{text}}
      </div>
    */}, this.data);
  },
  moveUp: function () {
    var exp = $['exp1'];
    exp.log('moved up');
    var $h1 = $('h1');
    if ($h1.length) {
      $(this).insertBefore($h1);
    } else {
      exp.report('h1 not found');
    }
  }
});

/* _optimizely_evaluate=safe */
$('h1').text($.proxy($['exp1'], 'headline'));
$('h2').each($['exp1'].moveUp);
