(this["webpackJsonp@speechly/browser-client-example"]=this["webpackJsonp@speechly/browser-client-example"]||[]).push([[0],{32:function(t,n,e){t.exports=e(33)},33:function(t,n,e){"use strict";e.r(n);var i=e(1),o=i.ClientState.Disconnected;function c(t,n){var e=document.getElementById("final");e.innerHTML=n?"<b>Context</b> ".concat(t," Done!"):"<b>Context</b> ".concat(t)}function r(t,n,e,i){var o=document.getElementById("log-list");o.innerHTML="<tr>\n          <td>".concat(n,"</td>\n          <td>").concat(e,"</td>\n          <td>").concat(t,"</td>\n          <td>").concat(JSON.stringify(i),"</td>\n        </tr>")+o.innerHTML}window.onload=function(){var t;try{t=function(){var t="31097c58-9d3e-48e4-98c6-1e8c03cfe9db";0;0;return new i.Client({appId:t,language:"en-US",debug:!0})}()}catch(n){return void function(t){var n=document.getElementById("status");if(null===n)return;n.innerHTML=t}(n.message)}t.onSegmentChange((function(t){var n,e,i;n=t.words,document.getElementById("transcript-words").innerHTML=n.map((function(t){return t.isFinal?"<b>".concat(t.value,"</b>"):t.value})).join(" "),document.getElementById("transcript-list").innerHTML=n.map((function(t){return t.isFinal?"<li><b>".concat(t.value," [").concat(t.index,"]</b></li>"):"<li>".concat(t.value," [").concat(t.index,"]</li>")})).join(""),e=t.entities,document.getElementById("entities-list").innerHTML=e.map((function(t){var n="".concat(t.type," - ").concat(t.value," [").concat(t.startPosition," - ").concat(t.endPosition,")");return t.isFinal?"<li><b>".concat(n,"</b></li>"):"<li>".concat(n,"</li>")})).join(""),i=t.intent,document.getElementById("intent-value").innerHTML=i.isFinal?"<b>".concat(i.intent,"</b>"):i.intent,t.isFinal&&c(t.contextId,!0)})),t.onTentativeIntent((function(t,n,e){return r("tentative_intent",t,n,{intent:e})})),t.onTentativeEntities((function(t,n,e){return r("tentative_entities",t,n,{entities:e})})),t.onTentativeTranscript((function(t,n,e,i){return r("tentative_transcript",t,n,{words:e,transcript:i})})),t.onIntent((function(t,n,e){return r("intent",t,n,{intent:e})})),t.onEntity((function(t,n,e){return r("entity",t,n,{entity:e})})),t.onTranscript((function(t,n,e){return r("transcript",t,n,{word:e})})),function(t){var n=document.getElementById("initialize"),e=document.getElementById("record");function r(n){n.preventDefault(),t.startContext((function(t,n){t?console.error("Could not start recording",t):function(t){c(t,!1),document.getElementById("transcript-words").innerHTML="",document.getElementById("transcript-list").innerHTML="",document.getElementById("log-list").innerHTML="",document.getElementById("entities-list").innerHTML=""}(n)}))}function a(n){n.preventDefault(),t.stopContext((function(t){t&&console.error("Could not stop recording",t)}))}e.addEventListener("mousedown",r),e.addEventListener("touchstart",r),e.addEventListener("mouseup",a),e.addEventListener("touchend",a),t.onStateChange((function(t){o=t,t!==i.ClientState.Connected&&t!==i.ClientState.Disconnected?n.setAttribute("disabled","disabled"):n.removeAttribute("disabled"),t<i.ClientState.Connected||t===i.ClientState.Stopping?e.setAttribute("disabled","disabled"):e.removeAttribute("disabled"),document.getElementById("status").innerHTML=Object(i.stateToString)(t)}))}(t),function(t){var n=document.getElementById("initialize");function e(n){n.preventDefault();var e=n.target;o===i.ClientState.Disconnected&&t.initialize((function(t){void 0===t?e.innerHTML="Disconnect":console.error("Error initializing Speechly client:",t)})),o===i.ClientState.Connected&&t.close((function(t){void 0===t?e.innerHTML="Connect":console.error("Error initializing Speechly client:",t)}))}n.addEventListener("mousedown",e),n.addEventListener("touchstart",e)}(t)}}},[[32,1,2]]]);
//# sourceMappingURL=main.34a965ef.chunk.js.map