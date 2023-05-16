const fs = require('fs');

// Cria um arquivo

// Cria um diretório

// fs.mkdir('teste-1', (err) => { // callback

//     if (err) throw err; // se houver erro, lança uma exceção

//     console.log('Diretório criado com sucesso!'); // se não houver erro, exibe a mensagem

//     }
// );

try {
    fs.mkdirSync('teste-1/teste-2'); // síncrono

    console.log('Diretório criado com sucesso!'); // se não houver erro, exibe a mensagem
} catch (err) {
    console.log(err);
}
