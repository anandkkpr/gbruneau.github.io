const p=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}};p();var d="#777777",C=0,m,s=0,u=60,c=!1;for(let e=0;e<u;e++)m=`<div id="c${C+e}" class="paletteColor">
    <input class="inColor" type="color" value="${d}" >
    <div>${d}</div>
  </div>`,document.getElementById("colPalette").innerHTML+=m;var h=function(){this.parentElement.querySelector("div").innerText=this.value;var e=parseInt(this.parentElement.id.substring(1));s=Math.max(s,e),document.getElementById("btSave").style.display="block"},v=document.getElementsByClassName("inColor");for(var a=0;a<v.length;a++)v[a].addEventListener("change",h);document.getElementById("btReset").addEventListener("click",y);document.getElementById("btLoad").addEventListener("click",g);document.getElementById("btSave").addEventListener("click",B);document.getElementById("btRandom").addEventListener("click",b);document.getElementById("btFlipBG").addEventListener("click",E);f();g();function f(){var e=getComputedStyle(document.documentElement).getPropertyValue("--darkColor"),t=getComputedStyle(document.documentElement).getPropertyValue("--lightColor");document.body.style.backgroundColor=c?e:t,document.body.style.color=c?t:e;var o=document.querySelectorAll(".paletteColor input");for(a=0;a<o.length;a++)o[a].style.backgroundColor=c?e:t,o[a].style.borderColor=c?e:t}function y(){for(var e=document.getElementsByClassName("inColor"),t=0;t<e.length;t++)e[t].value=d,e[t].parentElement.querySelector("div").innerText=d,s=0;document.getElementById("btSave").style.display="none"}function E(){c=!c,f()}function g(){var e=k("colors"),t;e===""&&(e="[]");var o=e.match(/#[0-9a-f]{6}/gi);y();for(var n=0;n<o.length;n++)console.log(o[n]),t=document.getElementById(`c${n}`),t.querySelector("input").value=o[n],t.querySelector("div").innerText=o[n],s=n}function b(){for(var e,t=document.getElementsByClassName("inColor"),o=0;o<u;o++)e=Math.floor(Math.random()*16777215).toString(16),t[o].value=`#${e}`,t[o].parentElement.querySelector("div").innerText=`#${e}`;s=u-1,document.getElementById("btSave").style.display="block"}function B(){for(var e=[],t=document.getElementsByClassName("inColor"),o=0;o<=s;o++)e.push(t[o].value);var n=JSON.stringify(e);S("colors",n,100)}function S(e,t,o){const n=new Date;n.setTime(n.getTime()+o*24*60*60*1e3);let r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r}function k(e){let t=e+"=",o=document.cookie.split(";");for(let n=0;n<o.length;n++){let r=o[n];for(;r.charAt(0)==" ";)r=r.substring(1);if(r.indexOf(t)==0)return r.substring(t.length,r.length)}return""}
