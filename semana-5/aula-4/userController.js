// module.exports = {
//     // Função para criar um usuário
//     async criarUsuario(req, res) {
        

//         const { nome, idade, email } = req.body;


//         if (!nome || !idade || !email) {
//           return res.status(400).json({ error: 'Campos obrigatórios não preenchidos.' });
//         }
      
//         // Verifica se o email possui o formato correto
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//           return res.status(400).json({ error: 'Formato de email inválido.' });
//         }
      
//         const id = users.length + 1;
//         const newUser = { id, nome, idade, email };
//         users.push(newUser);
      
//         return res.status(201).json({ message: 'Usuário criado com sucesso!' });
//       },


      
      // Rota GET para listar todos os usuários
    //   app.get('/users', (req, res) => {
    //     if (users.length === 0) {
    //       return res.status(204).send();
    //     }
      
    //     return res.status(200).json({ users });
    //   });
      
    //   app.listen(3000, () => {
    //     console.log('Servidor rodando na porta 3000');
    //   });
      //Certifique-se de instalar o pacote express antes de executar o código acima. Você pode fazer isso executando o comando npm install express. Depois de executar o código, você poderá acessar as rotas POST e GET em http://localhost:3000/users. Lembre-se de adaptar o código conforme necessário para atender às suas necessidades específicas.
 
//}


