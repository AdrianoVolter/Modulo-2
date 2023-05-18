// Crie um servidor WEB que exibirá um formulário HTML como resposta padrão com um input do tipo ‘text’ para o usuário digitar seu nome.

// Retorne uma mensagem de boas vindas junto com o nome do usuário.

const http = require('http');
const querystring = require('querystring');
const fs = require('fs');


let formHtml = '';

try{
  formHtml = fs.readFileSync('index.html', 'utf-8');
}
catch(erro){
    console.log(erro);
    }

function salvarDados(dados){
    console.log(querystring.parse(dados));
}

const server = http.createServer((request, response) => {
    switch(request.url){
        case '/':
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end(`<h1>${request.url}</h1>`);
            break;
        case '/usuario':
            switch(request.method){
                case 'GET':
                    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    response.write(formHtml);
                    response.end();
                    break;
                case 'POST':
                    let dados = '';
                    request.on('data', (data) => {
                        dados += data;
                    });
                    request.on('end', () => {
                        console.log('Dados enviados com sucesso!');
                        salvarDados(dados);
                    });

                    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    response.write('<h1>Dados recebidos</h1>');
                    response.write("<button onClick='window.location.href = '/usuario''>Voltar</button>");
                    response.end();
                    break;
            }
            break;
    }
}

);

server.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
});


// /**
//  * # Iniciando o servidor
//  * [] - importar o http
//  * [] - importar o fs
//  * [] - importar o querystring
// * # criando o servidor
//  * [] - usar o método createServer
//  * [] - passar o callback do createServer
//  * [] - criar switch para monitorar as urls
//  * [] - atribuir o createServer a uma variável
//  * [] - usar o método listen na variável criada e passar a porta
// * # Criando o formulário
//  * [] - criar arquivo HTML
//  * [] - criar form com input type text para receber o nome
//  * [] - importar o HTML no index.js
// * # Exibindo formulário
//  * [] - definir uma url para enviar como resposta o formulário HTML
//  * [] - criar writeHead no response
//  * [] - criar um write no response e passar o conteúdo do HTML
//  * [] - finalizar o envio com o response.end()
// * # Recebendo os dados
//  * [] - criar switch na rota definida para monitorar o POST
//  * [] - criar os métodos on do tipo "data" e do tipo "end" para receber os dados
//  * [] - criar uma função para receber os dados e fazer o tratamento do querystring
//  * [] - no método on do tipo "end" chamar a função criada no passo anterior
//  * [] - retornar uma resposta com uma mensagem de boas vindas e o nome do usuário