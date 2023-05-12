// function somar (a, b) {
//     return a + b;
// }

// function subtrair (a, b) {
//     return a - b;
// }

// function executa(callback,a ,b) {
//     return callback(a,b);
// }

// let value = executa(somar, 1, 2);
// let value2 = executa(subtrair, 1, 2);

// console.log(value);
// console.log(value2);




// function somar3segundos(a, b){
    /*
      1 - [x] - instanciar a promise
      2 - [x] - passar um callback como parâmetro para a promise
      3 - [x] - passar dois parâmetros no callback
        - resolve
        - reject
    */
    // return new Promise((resolve, reject)=>{
      // retornar o resultado
      // simular a demora de uma API
//       setTimeout(()=>{
//         resolve(a + b)
//       }, 5000)
//     })
//   }
//   let value = somar3segundos(10, 5)
//                   .then(resultado => resultado - 5) // 10
//                   .then(resultado => resultado - 5) // 5
//                   .then(resultado => console.log(resultado)) // 5
//                   // pega o resultado do then superior
//                   .catch(erro => console.log("Erro: ", erro))
  
//   console.log("executando...")



// function somar3segudos (a, b){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 3000);
//     });
// }
// let value = somar3segudos(15, 2)
//     .then(resultado => console.log("\n Valor da soma: "+resultado+"\n"))
//     .catch(erro => console.log(erro));
// console.log("\nExecutando...\n");


// const dados = []

// function buscarDados(){

//     try{
//         fetch("https://localhost:5001/produtos")
//         .then(resultado => resultado.json())
//         .then(resultado => dados = resultado)
//         .catch(erro => console.log(erro));
        
//     }catch(erro){
//         console.log(erro);
//     }
    
// }





// Crie um módulo para consultar a API do GitHub recebendo o nome de usuário como parâmetro, e retorna os seguintes dados:

// nome
// email
// foto de perfil

//modulo.js
const buscarDados = require("./modulo");

buscarDados('adrianovolter')



