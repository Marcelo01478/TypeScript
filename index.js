"use strict";
//  DADOS PRIMITIVOS
const user1 = {
    name: 'Marcelo',
    email: 'marceloborges734@gmail.com',
    password: 1234
};
const user2 = {
    name: 'Borges',
    email: 'borges734@gmail.com',
};
console.log(user1.password);
var x;
x = 7;
console.log(typeof (x));
x = '7';
console.log(typeof (x));
// enum
var tamanho;
(function (tamanho) {
    tamanho["P"] = "Pequena";
    tamanho["M"] = "M\u00E9dia";
    tamanho["G"] = "Grande";
})(tamanho || (tamanho = {}));
const camiseta = {
    Nome: 'camisa branca',
    tamanho: tamanho.M
};
console.log(camiseta.tamanho);
