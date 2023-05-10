//Classes e Objetos em JavaScript - 1 - Introdução
// e'a representação de um objeto do mundo real em código.

// Abstração 
//é selecionar as características relevantes de um objeto do mundo real e traduzi-las em código.


//class Animal{
    // especie  =""
    // genero = ""
    // peso = 0
    // nome = ""

//     constructor(especie, genero, peso, nome){
//         this.especie = especie
//         this.genero = genero
//         this.peso = peso
//         this.nome = nome
//     }
// }

//Objeto 
// é a implementação de uma classe


//implementação de uma classe -> objeto
// const cachorro = new Animal("cachorro", "macho", 10, "rex")


// const filo = new Animal("capivara", "macho", 30, "filo")


// console.log(filo)

// console.log(cachorro)



const produto = {
    nome: "camiseta",
    preco: 20,
    material: "algodão",
    marca: "nike",
}

produto.cor = "preto"

const produto2 = {...produto} // spread operator (operador de propagação)

produto2.cor = "branco"


console.log(produto)
console.log(produto2)
