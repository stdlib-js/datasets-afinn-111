"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var t=s(function(p,a){
var i=require("path").resolve,o=require('@stdlib/fs-read-json/dist').sync,u=i(__dirname,"..","data","words.json"),v={encoding:"utf8"};function c(){var r=o(u,v);if(r instanceof Error)throw r;return r}a.exports=c
});var d=t();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
