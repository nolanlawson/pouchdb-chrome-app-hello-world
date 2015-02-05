(function () {
  'use strict';
  
  var idb = document.getElementById('idb');
  var websql = document.getElementById('websql');
  
  new PouchDB('using-idb').info().then(function () {
    idb.innerHTML = '&#10003';
  }).catch(function (err) {
    idb.innerHTML = "Nope, got an error: " + err;
  });
  
  new PouchDB('using-websql', {adapter: 'websql'}).info().then(function () {
    websql.innerHTML = '&#10003';
  }).catch(function (err) {
    websql.innerHTML = "Nope, got an error: " + err + '<br/>(WebSQL is not supported in Chrome apps.)';
  });
 
})();
