-- Com base nas tabelas acima, construa os seguintes scripts em sql:


-- -(X) Selecione todos os clientes da tabela "Clientes";
-- -(X) Selecione o nome e a cidade dos clientes que possuem mais de 30 anos;
-- -(X) Selecione a contagem total de clientes por cidade;
-- -(X) Selecione o ID do cliente e o valor total de pedidos realizados por ele.


-- tabela cliente 

CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL, -- não pode ser negativo interger unsigned
    cidade VARCHAR(100) NOT NULL
);

SELECT * FROM cliente; 


-- tabela pedidos

CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

SELECT * FROM pedidos;


--inserir dados na tabela cliente

INSERT INTO cliente (id_cliente, nome, idade, cidade)
VALUES (1, 'João', 25, 'São Paulo'),
(2, 'Maria', 30, 'Rio de Janeiro'),
(3, 'José', 35, 'São Paulo'),
(4, 'Ana', 40, 'Rio de Janeiro'),
(5, 'Pedro', 45, 'São Paulo'),
(6, 'Paula', 50, 'Rio de Janeiro'),
(7, 'Carlos', 55, 'São Paulo'),
(8, 'Mariana', 60, 'Rio de Janeiro'),
(9, 'Fernando', 65, 'São Paulo'),
(10, 'Mariane', 70, 'Rio de Janeiro');

SELECT * FROM cliente;


--inserir dados na tabela pedidos

INSERT INTO pedidos (id_pedido, id_cliente, data, valor)
VALUES (1, 1, '2021-01-01', 100.00),
(2, 2, '2021-01-02', 200.00),
(3, 3, '2021-01-03', 300.00),
(4, 4, '2021-01-04', 400.00),
(5, 5, '2021-01-05', 500.00),
(6, 6, '2021-01-06', 600.00),
(7, 7, '2021-01-07', 700.00),
(8, 8, '2021-01-08', 800.00),
(9, 9, '2021-01-09', 900.00),
(10, 10, '2021-01-10', 1000.00);

SELECT * FROM pedidos;

-- Selecione todos os clientes da tabela "Clientes";

SELECT * FROM cliente;

--  Selecione o nome e a cidade dos clientes que possuem mais de 30 anos;

SELECT nome, cidade FROM cliente WHERE idade > 30;

-- Selecione a contagem total de clientes por cidade;

SELECT cidade, COUNT(*) FROM cliente GROUP BY cidade;


-- Selecione o ID do cliente e o valor total de pedidos realizados por ele.

SELECT id_cliente, SUM(valor) FROM pedidos GROUP BY id_cliente;