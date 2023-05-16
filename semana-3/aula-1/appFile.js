
const fs = require('fs');

// let conteudo =  "conteudo do arquivo usando o fs do node . appendFile \n";

// fs.appendFile('src/arquivo.txt', conteudo, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//     }
// );

try {

    fs.appendFileSync('src/arquivo.txt', 'conteudo do arquivo usando o fs do node . appendFileSync \n');

} catch (err) {
    console.log(err);
}
console.log('Saved!');