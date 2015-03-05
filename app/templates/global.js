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
window['optimizelyExp<%=idx%>'] = {};

<%=analytics%>

/* _optimizely_evaluate=safe */
