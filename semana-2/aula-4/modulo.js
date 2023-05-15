//const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
async function buscarDados(user){
    try{
        await fetch(`https://api.github.com/users/${user}`)
            .then(resultado => resultado.json())
            .then(resultado => data = resultado)
            .catch(erro => console.log(erro))
            // rl.question('Qual o seu nome? ' , () => {
                console.log(data.name)
                console.log(data.email)
                console.log(data.avatar_url)
               // rl.close();
            // });
    }catch(erro){
        console.log(erro)
    }
}

module.exports = buscarDados;