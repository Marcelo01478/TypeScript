"use strict";
class aluno {
    constructor(id, nome, certificados) {
        this.id = id;
        this.nome = nome;
        this.certificados = certificados;
    }
    novoCertificado() {
        return this.certificados = this.certificados + 1;
    }
}
const aluno1 = new aluno(1, 'Marcelo', 2);
const aluno2 = new aluno(2, 'Borges', 3);
aluno1.novoCertificado();
aluno1.novoCertificado();
aluno2.novoCertificado();
console.log(aluno1, aluno2);
