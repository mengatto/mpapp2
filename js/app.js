'use strict';

/* App Module */

var myApp = angular.module('mpApp', []);
myApp.controller('MainCtrl', function() {
  
});


myApp.controller('PregadoresCtrl', function(){
  this.dados = [
    {"nome":"Anderson Mengatto", "tel":"019 99294-7298"},
    {"nome":"Anderson Martins", "tel":"019 3030-3030"},
    {"nome":"Bruno Mengatto", "tel":"019 99370-5324"}
  ];



  this.save = function(){
    // Put the object into storage
    localStorage.setItem('dadosPregadores', JSON.stringify(this.dados));

    // Retrieve the object from storage
    var retorno = JSON.parse(localStorage.getItem('dadosPregadores'));

    alert('Nome: ' + retorno[0].nome + '\nTel: ' + retorno[0].tel + '\nNome: ' + retorno[1].nome + '\nTel: ' + retorno[1].tel + '\nNome: ' + retorno[2].nome + '\nTel: ' + retorno[2].tel);
  };


});