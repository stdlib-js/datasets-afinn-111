"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=n(function(d,a){
var s=require("path").resolve,i=require('@stdlib/fs-read-json/dist').sync,o=s(__dirname,"..","data","words.json"),u={encoding:"utf8"};function v(){var r=i(o,u);if(r instanceof Error)throw r;return r}a.exports=v
});var f=t();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
