/* _optimizely_evaluate=force */ /*global $*/
/*--------------------------------------------
 *
 *  test name: <%=name%>
 *  test platform: optimizely
<%if(plan){%> *  test plan: <%=plan%><%}%>
 *  author: <%=author%>
 *  notes:
 *    - valid for: {{urls}}
 *    - assumes {{tbd}}
 *
 * ------------------------------------------*/
var _ = $['exp<%=idx%>'];
_.log('v1');
$('html').addClass('exp<%=idx%>');

_.$headline = $(_.timpl(function() {
  /*
  <div id="exp<%=idx%>"> {{text}} </div>
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
$('h1').replaceWith($['exp<%=idx%>'].$headline);
$('h2').each($['exp<%=idx%>'].moveUp);
