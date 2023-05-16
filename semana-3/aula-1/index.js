const fs = require('fs');

fs.rmdir('teste-1',(err) => { // rmdir = remove diretório do sistema

    if (err) throw err;
    console.log('Diretório deletado com sucesso!');
});

