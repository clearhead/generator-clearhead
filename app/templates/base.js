// boilerplate templating, error reporting,
// report(error||string) ==> logs to ga
// htmlHereDoc(fn) ==> returns string from multiline comment function
// tmpl ==> handlebarsish / https://github.com/premasagar/tim
/*jshint ignore:start*/
$.extend($.exp<%=idx%>, {
  report: function(a){
    var b="http://www.google-analytics.com/collect?",
    d=(new Date).getTime();try{d=/optimizelyEndUserId=([^;]+)/.exec(
    document.cookie)[1]}catch(a){}(new Image).src=b+$.map({v:1,tid:
    "UA-33947856-2",cid:d,t:"event",ec:location.hostname,
    ea:"exp<%=idx%>",el:a.toString(),z:(new Date).getTime()},
    function(a,b){return b+"="+encodeURIComponent(a)}).join("&")
  },
  htmlHeredoc: function(fn) {
    var html = fn.toString().replace(/[^]+\/\*|[^\S]+\*\/[^]+|\s+(?=<)|\n|\t|\r/g, '').replace(/>\s+/g, '>');
    return $(html);
  },
  tmpl:function(){
    var a=/{{\s*([a-z0-9_][\\.a-z0-9_]*)\s*}}/gi;return function(b,c){
    return b.replace(a,function(a,b){for(var d=b.split("."),e=d.length,
    f=c,g=0;e>g;g++){if(f=f[d[g]],void 0===f)throw"tim: '"+d[g]+
    "' not found in "+a;if(g===e-1)return f}})}
  }()
};
/*jshint ignore:end*/

