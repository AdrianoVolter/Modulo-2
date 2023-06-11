-CREATE TABLE Projetos (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  descricao VARCHAR(100),
  data_inicio DATE,
  data_prazo DATE
);

SELECT * FROM Projetos;

-- Inserindo alguns dados na tabela Projetos (exemplo)
INSERT INTO Projetos (id, nome, descricao, data_inicio, data_prazo)
VALUES (1, 'Projeto A', 'Descrição do Projeto A', '2023-01-01', '2023-02-28'),
       (2, 'Projeto B', 'Descrição do Projeto B', '2023-03-01', '2023-04-30'),
       (3, 'Projeto C', 'Descrição do Projeto C', '2023-05-01', '2023-06-30');

-- Criando a tabela Categoria
CREATE TYPE categoria_tipo AS ENUM ('pessoal', 'profissional', 'acadêmica');

CREATE TABLE Categoria (
  id INT PRIMARY KEY,
  categoria VARCHAR(100),
  descricao VARCHAR(100),
  tipo categoria_tipo
);

-- Inserindo alguns dados na tabela Categoria (exemplo)
INSERT INTO Categoria (id, categoria, descricao)
VALUES (1, 'Tarefa pessoal', 'Tarefas relacionadas a assuntos pessoais'),
       (2, 'Tarefa profissional', 'Tarefas relacionadas ao trabalho'),
       (3, 'Tarefa acadêmica', 'Tarefas relacionadas a estudos');

-- Criando a tabela Tarefas
CREATE TABLE Tarefas (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  descricao VARCHAR(100),
  data_inicio DATE,
  data_prazo DATE,
  FOREIGN KEY (categoria_id) REFERENCES Categoria(id)
  FOREIGN KEY (projeto_id) REFERENCES Projetos(id)
);

-- Inserindo alguns dados na tabela Tarefas (exemplo)
INSERT INTO Tarefas (id, nome, descricao, data_inicio, data_prazo)
VALUES (1, 'Tarefa A', 'Descrição da Tarefa A', '2023-01-01', '2023-02-28'),
       (2, 'Tarefa B', 'Descrição da Tarefa B', '2023-03-01', '2023-04-30'),
       (3, 'Tarefa C', 'Descrição da Tarefa C', '2023-05-01', '2023-06-30');

-- Selecionando todos os dados de Projetos
SELECT * FROM Projetos;

-- Selecionando todos os dados de Tarefas
SELECT * FROM Tarefas;

-- Selecionando todos os dados de Categoria
SELECT * FROM Categoria;








-------------------------------------------------------------------------------




exemplo banco de dados

CREATE TABLE Projetos (
  id INT PRIMARY KEY,
  nome VARCHAR(255),
  descricao TEXT,
  data_inicio DATE,
  data_prazo DATE
);

CREATE TABLE Tarefas (
  id INT PRIMARY KEY,
  nome VARCHAR(255),
  descricao TEXT,
  data_inicio DATE,
  data_prazo DATE,
  concluida BOOLEAN
);

Criação de nova chave estrangeir
ALTER TABLE Tarefas
ADD COLUMN projeto_id INT,
ADD CONSTRAINT fk_projeto
  FOREIGN KEY (projeto_id)
  REFERENCES Projetos(id);

-- Tabela de Categorias
CREATE TABLE Categorias (
  id INT PRIMARY KEY,
  nome VARCHAR(255),
  descricao TEXT
);

-- Criação de nova chave estrangeira
ALTER TABLE Tarefas
ADD COLUMN categoria_id INT,
ADD CONSTRAINT fk_categoria
  FOREIGN KEY (categoria_id)
  REFERENCES Categorias(id);


-- Inserindo alguns dados na tabela Projetos (exemplo)

INSERT INTO Projetos (id, nome, descricao, data_inicio, data_prazo)
VALUES (1, 'Projeto A', 'Descrição do Projeto A', '2023-01-01', '2023-02-28'),
       (2, 'Projeto B', 'Descrição do Projeto B', '2023-03-01', '2023-04-30'),
       (3, 'Projeto C', 'Descrição do Projeto C', '2023-05-01', '2023-06-30');

INSERT INTO Categorias (id, nome, descricao)
VALUES (1, 'Tarefa pessoal', 'Tarefas relacionadas a assuntos pessoais'),
       (2, 'Tarefa profissional', 'Tarefas relacionadas ao trabalho'),
       (3, 'Tarefa acadêmica', 'Tarefas relacionadas a estudos');

INSERT INTO Tarefas (id, nome, descricao, projeto_id, categoria_id, data_inicio, data_prazo, concluida)
VALUES (1, 'Tarefa 1', 'Descrição da Tarefa 1', 1, 1, '2023-01-05', '2023-01-15', true),
       (2, 'Tarefa 2', 'Descrição da Tarefa 2', 1, 2, '2023-01-10', '2023-01-20', false),
       (3, 'Tarefa 3', 'Descrição da Tarefa 3', 2, 3, '2023-01-15', '2023-01-25', false),
       (4, 'Tarefa 4', 'Descrição da Tarefa 4', 2, 1, '2023-01-20', '2023-01-30', false),
       (5, 'Tarefa 5', 'Descrição da Tarefa 5', 3, 2, '2023-01-25', '2023-02-04', false),
       (6, 'Tarefa 6', 'Descrição da Tarefa 6', 3, 3, '2023-01-30', '2023-02-08', false);

CREATE TYPE categoria_tipo AS ENUM ('pessoal', 'profissional', 'acadêmica');

CREATE TABLE Categorias (
  id INT PRIMARY KEY,
  nome VARCHAR(255),
  descricao TEXT,
  tipo categoria_tipo
);

-- selecionando todos os dados de Projetos
SELECT id, nome
FROM Tarefas
WHERE concluida = true;

-- projetos que ainda não foram concluídos
SELECT id, nome
FROM Tarefas
WHERE data_prazo < CURRENT_DATE AND concluida = false;

-- contando a quantidade de tarefas por projeto
SELECT p.id AS projeto_id, p.nome AS nome_projeto, COUNT(t.id) AS quantidade_tarefas
FROM Projetos p
LEFT JOIN Tarefas t ON t.projeto_id = p.id
GROUP BY p.id, p.nome;

