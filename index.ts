//  DADOS PRIMITIVOS

// const texto:string = 'Olá Mundo'
// const nome: string = 'Bem vindo ,Marcelo!'
// var saudacao = texto + nome
// console.log(saudacao);

// Arrays e Tuplas
// const pares:number[] = [2, 4, 6, 8, 10,12];

// const linguagens: readonly string[] = ['html', 'Css' ,'javascrit', 'react']

/* linguagens.push('typescript')
linguagens.push('java')*/

// console.log(linguagens)

// var tupla:[string, number, boolean] = ['aqui vai um texto',10, true]
// tupla.push('nova variavel')

// console.log(tupla)


////////////////////////////////////////////////////////////
//Objetos

// const user: {nome: string,email: string,senha: number} ={
//     nome:'Marcelo',
//     email:'marceloborges734@gmail.com',
//     senha:1234
// }

// console.log(user.email)

// Type Alias e interface
interface Usuario{
    name: string,
    email: string,
    password?: number
}

const user1: Usuario ={
    name: 'Marcelo',
    email:'marceloborges734@gmail.com',
    password: 1234
}

const user2: Usuario ={
    name: 'Borges',
    email:'borges734@gmail.com',
   
}

console.log(user1.password)

// any ,union type


type typeId = string | number
 var x:typeId

 x=7
 console.log (typeof(x))

 x= '7' 
 console.log (typeof(x)) 

 // enum

 enum tamanho {
    P = 'Pequena',
    M = 'Média',
    G = 'Grande'
 }
 const camiseta = {
    Nome:'camisa branca',
    tamanho:tamanho.M
 }

 console.log(camiseta.tamanho)