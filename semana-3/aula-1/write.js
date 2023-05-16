const fs = require('fs');

// // writeFile - Escrever arquivos - Não bloquante
// const conteudo = 'Este é o conteúdo que será gravado no arquivo.';

// // writeFile - Escrever arquivos - Não bloquante

// fs.writeFile('arquivo.txt', conteudo, (err) => { // callback - função que será executada após a gravação do arquivo
//   if (err) throw err; // Se houver erro, lança uma exceção
//   console.log('Arquivo gravado com sucesso!'); // Se não houver erro, exibe a mensagem
// });

// // writeFile - Escrever arquivos - Bloquante
try { // Tenta executar o código
  fs.writeFileSync('src/arquivo.txt', 'Este é o conteúdo que será gravado no arquivo.');
  console.log('Arquivo gravado com sucesso!');
}
catch (err) { // Se houver erro, captura o erro e exibe no console
    console.log(err); // Exibe o erro no console
}




console.log('Final da execução'); // Exibe a mensagem no console



















// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Digite o primeiro número: ', (num1) => {
//     readline.question('Digite o segundo número: ', (num2) => {
//       const result = parseInt(num1) + parseInt(num2);
//       console.log(`A soma é ${result}`);
//       readline.close();
//     });
//   });
  