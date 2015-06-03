/* _optimizely_evaluate=force */ /*global $*/
/*--------------------------------------------
 *
 *  test name: exp-1-foo
 *  test platform: optimizely
 *  test plan: ex.ly/plan.pdf
 *  author: tom@clearhead.me
 *  notes:
 *    - valid for: {{urls}}
 *    - assumes {{tbd}}
 *
 * ------------------------------------------*/
var idx = 'exp1'; // required in sub functions
var _ = $[idx] = { id: 0123456789, cv: 0 };

// google-tag-manager.js
!function(){try{var e=_.id,a=_.cv;window.clearhead=window.clearhead||{},window.clearhead.gtm=window.clearhead.gtm||{},Object.defineProperty(window.clearhead.gtm,"ab"+a,{get:function(){var a,i;try{a=window.optimizely.data.experiments[e].name,i=window.optimizely.variationNamesMap[e]}catch(t){}return a&&i?a+": "+i:void 0}})}catch(i){}}(); // jshint ignore:line

// log(string) ==> logs to console
_.log=function(){try{/clearhead-debug/.test(location.href)&&(document.cookie="clearhead-debug=true;path=/;"),/clearhead-debug=true/.test(document.cookie)&&console.info.apply(console,[].concat.apply(["Clearhead",idx],arguments))}catch(e){}},
// report(error||string) ==> event to ga
_.report=function(){try{var e="https://ssl.google-analytics.com/collect?",t=(new Date).getTime();try{t=/optimizelyEndUserId=([^;]+)/.exec(document.cookie)[1]}catch(n){}t=t.replace(/[^\d]/g,""),(new Image).src=e+$.map({v:1,tid:"UA-33947856-2",cid:t.toString(),t:"event",ec:location.hostname,ea:idx,el:err.toString(),z:(new Date).getTime()},function(e,t){return t+"="+encodeURIComponent(e)}).join("&")}catch(n){}},
// tmpl ==> handlebarsish / https://github.com/premasagar/tim
function(e){"use strict";function t(e){var t=r.exec(e.toString());if(!t)throw new TypeError("Multiline comment missing.");return t[1]}function n(e,t){return e.replace(l,function(e,n){for(var r=n.split("."),c=r.length,i=t,a=0;c>a;a++){if(i=i[r[a]],i===o)throw'tim: "'+r[a]+'" not found in '+e;if(a===c-1)return i}})}e.timpl=function(e,o){return n(e.call?t(e):e,o||{}).replace(/^\s+|\s+$/g,"")};var o,r=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//,c="{{",i="}}",a="[a-z0-9_$][\\.a-z0-9_]*",l=new RegExp(c+"\\s*("+a+")\\s*"+i,"gi")}(_); // jshint ignore:line

/* _optimizely_evaluate=safe */
