const fs = require('fs');

//maneira sincrona
try{
    const data =fs.readFileSync('src/arquivo.txt', "utf-8") //constante data recebe o conteúdo do arquivo
    console.log(data);
    

} catch (err) {
    console.log(err);
}

console.log('Execução depois do read'); // Exibe a mensagem no console


// fs.readFile('src/arquivo.txt', "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     }
// );
