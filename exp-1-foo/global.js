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
$['exp1'] = { id: 0123456789, cv: 0 };

// google-tag-manager.js
!function(){try{var e=$.exp1.id,a=$.exp1.cv;window.clearhead=window.clearhead||{},window.clearhead.gtm=window.clearhead.gtm||{},Object.defineProperty(window.clearhead.gtm,"ab"+a,{get:function(){var a,i;try{a=window.optimizely.data.experiments[e].name,i=window.optimizely.variationNamesMap[e]}catch(t){}return a&&i?a+": "+i:void 0}})}catch(i){}}(); // jshint ignore:line

// log(string) ==> logs to console
$.exp1.log=function(){try{window.optimizely=window.optimizely||[];var e=[].concat.apply(["Clearhead","exp1"],arguments);optimizely.push(e.join(" / ")),/clearhead-debug=true/.test(document.cookie)&&console.info.apply(console,e)}catch(t){}},
// report(error||string) ==> event to ga
$.exp1.report=function(){try{var e="https://ssl.google-analytics.com/collect?",t=(new Date).getTime();try{t=/optimizelyEndUserId=([^;]+)/.exec(document.cookie)[1]}catch(n){}t=t.replace(/[^\d]/g,""),(new Image).src=e+$.map({v:1,tid:"UA-33947856-2",cid:t.toString(),t:"event",ec:location.hostname,ea:"exp1",el:err.toString(),z:(new Date).getTime()},function(e,t){return t+"="+encodeURIComponent(e)}).join("&")}catch(n){}},
// tmpl ==> handlebarsish / https://github.com/premasagar/tim
function(e){"use strict";function t(e){var t=i.exec(e.toString());if(!t)throw new TypeError("Multiline comment missing.");return t[1]}function n(e,t){return e.replace(l,function(e,n){for(var i=n.split("."),r=i.length,c=t,a=0;r>a;a++){if(c=c[i[a]],c===o)throw'tim: "'+i[a]+'" not found in '+e;if(a===r-1)return c}})}e.timpl=function(e,o){return n(e.call?t(e):e,o||{}).replace(/^\s+|\s+$/g,"")};var o,i=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//,r="{{",c="}}",a="[a-z0-9_$][\\.a-z0-9_]*",l=new RegExp(r+"\\s*("+a+")\\s*"+c,"gi")}($.exp1); // jshint ignore:line

/* _optimizely_evaluate=safe */
