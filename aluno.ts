class aluno {
    id:number;
    nome:string
    certificados:number;

    constructor(id: number, nome:string, certificados:number){
        this.id = id;
        this.nome = nome;
        this.certificados = certificados
    }

    novoCertificado():number{
        return this.certificados = this.certificados +1
    }
   
}

const aluno1 = new aluno (1,'Marcelo',2)
const aluno2 = new aluno (2,'Borges',3)
aluno1.novoCertificado()
aluno1.novoCertificado()
aluno2.novoCertificado()

console.log(aluno1 , aluno2)