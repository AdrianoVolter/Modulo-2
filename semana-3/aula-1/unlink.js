const fs = require('fs');

// fs.unlink('src/arquivo.txt', (err) => { // unlink = remove arquivo do sistema

//   if (err) throw err;
//   console.log('Arquivo deletado com sucesso!');
// });


try {
    fs.unlinkSync('src/arquivo.txt'); // unlinkSync = remove arquivo do sistema

} catch (err) {
    console.log(err);
}
console.log('Arquivo deletado com sucesso!');