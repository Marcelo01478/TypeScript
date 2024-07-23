"use strict";
function Validador(cpf) {
    if (typeof (cpf) === 'number') {
        console.log('O dado precisa ser tratado');
    }
    else {
        console.log('O dado esta ok');
    }
}
const cpfA = '308.241.918-61';
const cpfB = 30824191861;
Validador(cpfA);
Validador(cpfB);
