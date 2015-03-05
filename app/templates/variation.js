/* _optimizely_evaluate=force */ /*global $*/
/*--------------------------------------------
 *
 *  test name: <%=name%>
 *  test platform: optimizely
 *  test plan: <%=plan%>
 *  author: <%=author%>
 *  notes:
 *    - valid for: {{urls}}
 *    - assumes {{tbd}}
 *
 * ------------------------------------------*/
$('html').addClass('clearhead-exp-<%=idx%>');
$.extend(window['optimizelyExp<%=idx%>'], {
  headlineText: 'New Headline',
  moveUp: function () {
    $(this).insertBefore($('h1'));
  }
};
/* _optimizely_evaluate=safe */
$('h1').text(window['optimizelyExp<%=idx%>'].headlineText);
$('h2').each(window['optimizelyExp<%=idx%>'].moveUp);
