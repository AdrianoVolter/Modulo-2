/*

  Um sistema de gerenciamento de biblioteca precisa de um
banco de dados para armazenar informações sobre os 
livros, autores, gêneros e editoras.

Modele o banco de dados com as seguintes tabelas:

Tabela "livros":

	Colunas: 
		id (inteiro, chave primária), 
		título (texto), 
		ano_publicacao (inteiro), 
		autor_id (inteiro, 
			chave estrangeira referenciando a tabela "autores"), 
		editora_id (inteiro, 
			chave estrangeira referenciando a tabela "editoras").
	
Tabela "autores":

	Colunas: 
		id (inteiro, chave primária), 
		nome (texto), 
		nacionalidade (texto), 
		data_nascimento (data).
	
Tabela "gêneros":

	Colunas: 
		id (inteiro, chave primária),
		nome (texto).
	
Tabela "editoras":

	Colunas: 
		id (inteiro, chave primária), 
		nome (texto), 
		país (texto), 
		fundação (data).
*/

-- Criando a tabela Autor
CREATE TABLE Autor (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  nacionalidade VARCHAR(100),
  data_nascimento DATE
);

select * from autor;

-- Criar a tabela Editora
CREATE TABLE Editora (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  pais VARCHAR(100),
  fundacao DATE
);

select * from editora;

-- Criar a tabela Livros
CREATE TABLE Livro (
  id SERIAL PRIMARY KEY,
  ano_publicacao INTEGER,
  autor_id INTEGER,
  editora_id INTEGER,
  foreign key (autor_id) references Autor(id),
  foreign key (editora_id) references Editora(id)
);

select * from Livro;

-- genero romance, aventura, e ficcao usando check
CREATE TABLE Genero (
  id INT PRIMARY KEY, -- id do genero
  tipo VARCHAR(100)  -- tipo do genero
  check (tipo in ('Romance', 'Aventura', 'Ficcao')) -- check para verificar se o valor esta dentro do tipo
);

-- genero romance, aventura, e ficcao usando enum
-- CREATE TYPE GeneroEnum as ENUM ('Romance', 'Aventura', 'Ficcao'); -- criando o tipo enum

-- CREATE TABLE Genero (
--   id INT PRIMARY KEY, -- id do genero
--   tipo GeneroEnum  -- tipo do genero
-- );

select * from Genero;

-- inserire dadaos genero
INSERT into Genero (id, tipo) values --
    (1, 'Romance'), -- inserindo os valores
    (2, 'Aventura'), -- inserindo os valores
    (3, 'Ficcao');      -- inserindo os valores

-- Inserir um valor em Editora
INSERT into Editora (nome, pais, fundacao) values
	('Brasil', 'Brasil', '2020-02-21'),
	('Brasil', 'Brasil', '2020-02-21');

-- Inserir um valor em Autor
INSERT into Autor (nome, nacionalidade, data_nascimento) values
	('Ricardo', 'Brasil', '2001-02-21'),
	('Thiago', 'Brasil', '1984-01-27');

-- Inserir um valor em Livro
INSERT into Livro (ano_publicacao, autor_id, editora_id) values
	(1914, 1, 1),
	(1945, 2, 1);

select * from livro;