// log(string) ==> logs to console
_.log = function log() { try {
  if (/clearhead-debug/.test(location.href))
    document.cookie = 'clearhead-debug=true;path=/;';
  if (/clearhead-debug=true/.test(document.cookie))
    console.info.apply(console, [].concat.apply(["Clearhead", idx], arguments));
} catch (a) {} };

// report(error||string) ==> event to ga
_.report = function report() {
  try { var b = "https://ssl.google-analytics.com/collect?", d = (new
  Date()) .getTime(); try { d = /optimizelyEndUserId=([^;]+)/.exec(
  document .cookie)[1]; } catch (e) {} d = d.replace(/[^\d]/g, '');
  (new Image()) .src = b + ($.map({ v: 1, tid: "UA-33947856-2", cid:
  d.toString(), t: "event", ec: location.hostname, ea: idx,
  el: err.toString(), z: (new Date()).getTime() }, function(a, b) {
  return b + "=" + encodeURIComponent(a); }).join("&")); } catch (e) {}
};

// tmpl ==> handlebarsish / https://github.com/premasagar/tim
(function(a){"use strict";function h(a){var c=b.exec(a.toString());if(
!c)throw new TypeError("Multiline comment missing.");return c[1];}
function i(a,b){return a.replace(f,function(a,c){for(var d=c.split("."),
e=d.length,f=b,h=0;e>h;h++){if(f=f[d[h]],f===g)throw'tim: "'+d[h]+
'" not found in '+a;if(h===e-1)return f;}});}a.timpl=function(a,b){
return i(a.call?h(a):a,b||{}).replace(/^\s+|\s+$/g,"");};var g,b=
/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//,
c="{{",d="}}",e="[a-z0-9_$][\\.a-z0-9_]*",f=new RegExp(c+"\\s*("+e+
")\\s*"+d,"gi");})(_);
