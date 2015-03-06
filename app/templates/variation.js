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
$('html').addClass('exp-<%=idx%>');
$.extend(exp<%=idx%>, {
  data: {text: 'New Headline'},
  headline: function () {
    return this.htmlHeredoc(function () {/*
      <div id="exp-<%=idx%>">
        {{text}}
      </div>
    */}, this.data);
  },
  moveUp: function () {
    $(this).insertBefore($('h1'));
  }
});
/* _optimizely_evaluate=safe */
$('h1').text($.proxy(exp<%=idx%>, 'headline'));
$('h2').each(exp<%=idx%>.moveUp);
