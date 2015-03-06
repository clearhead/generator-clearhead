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

<%= analytics %>

// boilerplate templating and config functions
window.exp<%=idx%> = {
  htmlHeredoc: function(fn) {
    var html = fn.toString().replace(/[^]+\/\*|[^\S]+\*\/[^]+|\s+(?=<)|\n|\t|\r/g, '').replace(/>\s+/g, '>');
    return $(html);
  },
  /*! Tim (lite) github.com/premasagar/tim
   * A tiny, secure JavaScript micro-templating script. */
  tim: function() {
    var e = /{{\s*([a-z0-9_][\\.a-z0-9_]*)\s*}}/gi;
    return function(f, g) {
      return f.replace(e, function(h, i) {
        for (var c = i.split("."), d = c.length, b = g, a = 0; a < d; a++) {
          b = b[c[a]];
          if (b === void 0) throw "tim: '" + c[a] + "' not found in " + h;
          if (a === d - 1) return b
        }
      })
    }
  }(),
};
/* _optimizely_evaluate=safe */
