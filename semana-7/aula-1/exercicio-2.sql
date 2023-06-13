--tabela funcionarios
CREATE TABLE Funcionarios (
    ID_Funcionario INT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Cargo VARCHAR(100) NOT NULL
);

--tabela departamentos
CREATE TABLE Departamentos (
    ID_Departamento INT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL
);

--tabela alocacoes
CREATE TABLE Alocacoes (
    ID_Alocacao INT PRIMARY KEY,
    ID_Funcionario INT NOT NULL,
    ID_Departamento INT NOT NULL,
    DataInicio DATE NOT NULL,
    DataFim DATE,
    FOREIGN KEY (ID_Funcionario) REFERENCES Funcionarios(ID_Funcionario),
    FOREIGN KEY (ID_Departamento) REFERENCES Departamentos(ID_Departamento)
);

-- Inserindo dados na tabela Funcionarios

INSERT INTO Funcionarios (ID_Funcionario, Nome, Cargo)
VALUES
    (1, 'João', 'Analista de Sistemas'),
    (2, 'Maria', 'Gerente de Projetos'),
    (3, 'José', 'Desenvolvedor'),
    (4, 'Ana', 'Analista de Sistemas'),
    (5, 'Carlos', 'Desenvolvedor'),
    (6, 'Mariana', 'Gerente de Projetos'),
    (7, 'Fernando', 'Desenvolvedor'),
    (8, 'Paula', 'Analista de Sistemas'),
    (9, 'Pedro', 'Desenvolvedor'),
    (10, 'Juliana', 'Analista de Sistemas');

select * from Funcionarios;

-- Inserindo dados na tabela Departamentos

INSERT INTO Departamentos (ID_Departamento, Nome)
VALUES
    (1, 'Desenvolvimento'),
    (2, 'Recursos Humanos'),
    (3, 'Financeiro'),
    (4, 'Marketing'),
    (5, 'Comercial'),
    (6, 'Administrativo');

select * from Departamentos;

-- Inserindo dados na tabela Alocacoes

INSERT INTO Alocacoes (ID_Alocacao, ID_Funcionario, ID_Departamento, DataInicio, DataFim)
VALUES
    (1, 1, 1, '2019-01-01', '2019-12-31'),
    (2, 2, 2, '2019-01-01', '2019-12-31'),
    (3, 3, 3, '2019-01-01', '2019-12-31'),
    (4, 4, 4, '2019-01-01', '2019-12-31'),
    (5, 5, 5, '2019-01-01', '2019-12-31'),
    (6, 6, 6, '2019-01-01', '2019-12-31'),
    (7, 7, 1, '2019-01-01', '2019-12-31'),
    (8, 8, 2, '2019-01-01', '2019-12-31'),
    (9, 9, 3, '2019-01-01', '2019-12-31'),
    (10, 10, 4, '2019-01-01', '2019-12-31'),
    (11, 1, 5, '2020-01-01', NULL),
    (12, 2, 6, '2020-01-01', NULL),
    (13, 3, 1, '2020-01-01', NULL),
    (14, 4, 2, '2020-01-01', NULL),
    (15, 5, 3, '2020-01-01', NULL),
    (16, 6, 4, '2020-01-01', NULL),
    (17, 7, 5, '2020-01-01', NULL),
    (18, 8, 6, '2020-01-01', NULL),
    (19, 9, 1, '2020-01-01', NULL),
    (20, 10, 2, '2020-01-01', NULL);

select * from Alocacoes;

-- Com base nas tabelas acima, construa os seguintes scripts em sql:

-- -(x) Selecione o nome do funcionário e o nome do departamento para cada alocação existente na tabela "Alocacoes";
-- -(x) Selecione o nome do funcionário, o nome do departamento e a data de início da alocação para todos os funcionários atualmente alocados em algum departamento (DataFim é nulo):
-- -(x) Selecione o nome do departamento e a quantidade de funcionários atualmente alocados em cada departamento:

-- select f.Nome, d.Nome from Funcionarios f 
-- inner join Alocacoes a on f.ID_Funcionario = a.ID_Funcionario 
-- inner join Departamentos d on a.ID_Departamento = d.ID_Departamento;

select Funcionarios.Nome, Departamentos.Nome
from Alocacoes
inner join Funcionarios on 
    Alocacoes.ID_Funcionario = Funcionarios.ID_Funcionario
inner join Departamentos on
    Alocacoes.ID_Departamento = Departamentos.ID_Departamento;


-- select f.Nome, d.Nome, a.DataInicio from Funcionarios f 
-- inner join Alocacoes a on f.ID_Funcionario = a.ID_Funcionario 
-- inner join Departamentos d on a.ID_Departamento = d.ID_Departamento 
-- where a.DataFim is null; 

select 
    Funcionarios.Nome, 
    Departamentos.Nome, 
    Alocacoes.DataInicio
from Alocacoes
inner join Funcionarios on 
    Alocacoes.ID_Funcionario = Funcionarios.ID_Funcionario
inner join Departamentos on
    Alocacoes.ID_Departamento = Departamentos.ID_Departamento
where Alocacoes.DataFim is null;


select d.Nome, count(f.ID_Funcionario) from Funcionarios f
inner join Alocacoes a on f.ID_Funcionario = a.ID_Funcionario
inner join Departamentos d on a.ID_Departamento = d.ID_Departamento
where a.DataFim is null
group by d.Nome;
