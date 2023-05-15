// Importa o módulo que criamos
const userModule = require('./modulo.js');

// Testa a função de cadastro de novo usuário
console.log(userModule.registerUser([
    {
  nome: 'João',
  email: 'joao@teste.com',
  senha: '123456'
    },
    {
    nome: 'Maria',
    email: 'maria@teste.com',
    senha: '123456'
    }
]
 

));

// Testa a função de login com dados corretos
//console.log(userModule.login('joao@teste.com', '123456'));

// Testa a função de login com senha incorreta
//console.log(userModule.login('joao@teste.com', 'senha-incorreta'));

// Testa a função de login com email incorreto
//console.log(userModule.login('email-incorreto@teste.com', '123456'));

// Testa a função de exclusão de usuário com dados corretos
console.log(userModule.deleteUser('joao@teste.com', '123456'));

// Testa a função de exclusão de usuário com senha incorreta
//console.log(userModule.deleteUser('joao@teste.com', 'senha-incorreta'));

// Testa a função de exclusão de usuário com email incorreto
//console.log(userModule.deleteUser('email-incorreto@teste.com', '123456'));
