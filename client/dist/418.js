/*! For license information please see 418.js.LICENSE.txt */
"use strict";(self.webpackChunkmlbtheshow22=self.webpackChunkmlbtheshow22||[]).push([[418],{7418:function(e){var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,c){for(var a,i,s=o(e),b=1;b<arguments.length;b++){for(var f in a=Object(arguments[b]))t.call(a,f)&&(s[f]=a[f]);if(r){i=r(a);for(var u=0;u<i.length;u++)n.call(a,i[u])&&(s[i[u]]=a[i[u]])}}return s}}}]);