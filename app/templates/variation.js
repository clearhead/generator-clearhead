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
$('html').addClass('exp-<%=idx%>');
$['exp<%=idx%>'].log('v1');

$.extend($['exp<%=idx%>'], {
  data: {text: 'New Headline'},
  headline: function () {
    this.log('headline');
    return this.htmlHeredoc(function () {/*
      <div id="exp-<%=idx%>">
        {{text}}
      </div>
    */}, this.data);
  },
  moveUp: function () {
    var exp = $['exp<%=idx%>'];
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
$('h1').text($.proxy($['exp<%=idx%>'], 'headline'));
$('h2').each($['exp<%=idx%>'].moveUp);
