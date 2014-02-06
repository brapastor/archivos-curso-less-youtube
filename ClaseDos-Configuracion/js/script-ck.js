/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT / GPLv2 License.
*/function increaseFontSize(){var e=document.getElementsByTagName("p");for(i=0;i<e.length;i++){if(e[i].style.fontSize)var t=parseInt(e[i].style.fontSize.replace("px",""));else var t=22;t!=max&&(t+=2);e[i].style.fontSize=t+"px"}}function decreaseFontSize(){var e=document.getElementsByTagName("p");for(i=0;i<e.length;i++){if(e[i].style.fontSize)var t=parseInt(e[i].style.fontSize.replace("px",""));else var t=12;t!=min&&(t-=1);e[i].style.fontSize=t+"px"}}(function(e){function h(){r.setAttribute("content",o);u=!0}function p(){r.setAttribute("content",s);u=!1}function d(t){c=t.accelerationIncludingGravity;a=Math.abs(c.x);f=Math.abs(c.y);l=Math.abs(c.z);(!e.orientation||e.orientation===180)&&(a>7||(l>6&&f<8||l<8&&f>6)&&a>5)?u&&p():u||h()}var t=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(t)&&t.indexOf("AppleWebKit")>-1))return;var n=e.document;if(!n.querySelector)return;var r=n.querySelector("meta[name=viewport]"),i=r&&r.getAttribute("content"),s=i+",maximum-scale=1",o=i+",maximum-scale=10",u=!0,a,f,l,c;if(!r)return;e.addEventListener("orientationchange",h,!1);e.addEventListener("devicemotion",d,!1)})(this);(function(e){"use strict";e.picturefill=function(){var t=e.document.getElementsByTagName("div");for(var n=0,r=t.length;n<r;n++)if(t[n].getAttribute("data-picture")!==null){var i=t[n].getElementsByTagName("div"),s=[];for(var o=0,u=i.length;o<u;o++){var a=i[o].getAttribute("data-media");(!a||e.matchMedia&&e.matchMedia(a).matches)&&s.push(i[o])}var f=t[n].getElementsByTagName("img")[0];if(s.length){if(!f){f=e.document.createElement("img");f.alt=t[n].getAttribute("data-alt");f.title=t[n].getAttribute("data-title");t[n].appendChild(f)}f.src=s.pop().getAttribute("data-src")}else f&&t[n].removeChild(f)}};if(e.addEventListener){e.addEventListener("resize",e.picturefill,!1);e.addEventListener("DOMContentLoaded",function(){e.picturefill();e.removeEventListener("load",e.picturefill,!1)},!1);e.addEventListener("load",e.picturefill,!1)}else e.attachEvent&&e.attachEvent("onload",e.picturefill)})(this);var min=8,max=32;