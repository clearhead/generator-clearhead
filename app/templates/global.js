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
var idx = 'exp<%=idx%>'; // required in sub functions
var _ = $[idx] = { id: 0123456789, cv: 0 };

<%=analytics%> // jshint ignore:line

<%=base%> // jshint ignore:line

/* _optimizely_evaluate=safe */
