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
$['exp<%=idx%>'] = { id: 0123456789, cv: 0 };

<%=analytics%> // jshint ignore:line

<%=base%> // jshint ignore:line

/* _optimizely_evaluate=safe */
