-- duas tabelas cliente e pedidos  , cliente com id ,nome e endereco e pedidos com id ,id_cliente e data

-- 1 - criar as tabelas
CREATE TABLE cliente (
   id SERIAL primary key,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(100) NOT NULL
);

select * from cliente;

CREATE TABLE pedidos (
   id SERIAL primary key,
    id_cliente INT NOT NULL,
    data DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

select * from pedidos;

-- 2 - inserir dados nas tabelas
INSERT INTO cliente (nome, endereco) VALUES ('João', 'Rua A');
INSERT INTO cliente (nome, endereco) VALUES ('Maria', 'Rua B');
INSERT INTO cliente (nome, endereco) VALUES ('José', 'Rua C');

select * from cliente;

INSERT INTO pedidos (id_cliente, data) VALUES (1, '2019-01-01');
INSERT INTO pedidos (id_cliente, data) VALUES (1, '2019-01-02');
INSERT INTO pedidos (id_cliente, data) VALUES (2, '2019-01-03');
INSERT INTO pedidos (id_cliente, data) VALUES (3, '2019-01-04');
INSERT INTO pedidos (id_cliente, data) VALUES (3, '2019-01-05');

select * from pedidos;

-- 3 - fazer um select usando left join para trazer todos os clientes e seus pedidos

select cliente.nome, pedidos.data from cliente left join pedidos on cliente.id = pedidos.id_cliente;

select cliente.nome, pedidos.data from cliente inner join pedidos on cliente.id = pedidos.id_cliente;

select count(*) from cliente left join pedidos on cliente.id = pedidos.id_cliente;

select count(*) from cliente left join pedidos on cliente.id = pedidos.id_cliente where pedidos.id is null;

select count(*) from cliente left join pedidos on cliente.id = pedidos.id_cliente where pedidos.id is not null;

select cliente.nome as cliente, pedidos.data as pedido from cliente left join pedidos on cliente.id = pedidos.id_cliente where pedidos.id is not null;