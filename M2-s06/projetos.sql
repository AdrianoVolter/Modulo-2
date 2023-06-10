-- Criando a tabela Projetos
CREATE TABLE Projetos (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  descricao VARCHAR(100),
  data_inicio DATE,
  data_prazo DATE
);

select *from Projetos;

-- Inserindo alguns dados na tabela Projetos (exemplo)
INSERT INTO Projetos (id, nome, descricao, data_inicio, data_prazo)
VALUES (1, 'Projeto A', 'Descrição do Projeto A', '2023-01-01', '2023-02-28'),
       (2, 'Projeto B', 'Descrição do Projeto B', '2023-03-01', '2023-04-30'),
       (3, 'Projeto C', 'Descrição do Projeto C', '2023-05-01', '2023-06-30');

-- Criando a tabela Categoria
CREATE TYPE CategoriaEnum AS ENUM ('pessoal', 'profissional', 'academico');

CREATE TABLE Categoria (
  id INT PRIMARY KEY,
  nome CategoriaEnum,
  descricao VARCHAR(100)
);

-- Inserindo alguns dados na tabela Categoria (exemplo)
INSERT INTO Categoria (id, nome, descricao)
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
  projeto_id INT REFERENCES Projetos(id),
  categoria_id INT REFERENCES Categoria(id)
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






-- 


