
const fs = require('fs');

// Define o nome do arquivo JSON que irá armazenar a lista de usuários
const FILENAME = 'users.json';

// Função para ler a lista de usuários do arquivo JSON
function readUsers() {
  try {
    const data = fs.readFileSync(FILENAME);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Função para escrever a lista de usuários no arquivo JSON
function writeUsers(users) {
  fs.writeFileSync(FILENAME, JSON.stringify(users));
}

// Função para cadastrar um novo usuário
function registerUser(user) {
  // Lê a lista de usuários do arquivo JSON
  const users = readUsers();

  // Verifica se o email já está sendo utilizado
  const emailExists = users.some((u) => u.email === user.email);
  if (emailExists) {
    return { success: false, message: 'Email já cadastrado' };
  }

  // Adiciona o novo usuário na lista de usuários
  users.push(user);

  // Escreve a lista de usuários atualizada no arquivo JSON
  writeUsers(users);

  return { success: true, message: 'Usuário cadastrado com sucesso' };
}

// Função para fazer login
function login(email, password) {
  // Lê a lista de usuários do arquivo JSON
  const users = readUsers();

  // Busca o usuário pelo email
  const user = users.find((u) => u.email === email);

  // Verifica se o usuário existe e a senha está correta
  if (!user || user.password !== password) {
    return { success: false, message: 'Email ou senha incorretos' };
  }

  return { success: true, message: 'Login realizado com sucesso' };
}

// Função para excluir um usuário
function deleteUser(email, password) {
  // Lê a lista de usuários do arquivo JSON
  const users = readUsers();

  // Busca o índice do usuário pelo email
  const index = users.findIndex((u) => u.email === email);

  // Verifica se o usuário existe e a senha está correta
  if (index === -1 || users[index].password !== password) {
    return { success: false, message: 'Email ou senha incorretos' };
  }

  // Remove o usuário da lista de usuários
  users.splice(index, 1);

  // Escreve a lista de usuários atualizada no arquivo JSON
  writeUsers(users);

  return { success: true, message: 'Usuário excluído com sucesso' };
}

// Exporta as funções do módulo
module.exports = { registerUser, login, deleteUser };
