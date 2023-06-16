create table cliente (
    cliente_id serial primary key,
    cpf integer,
    nome varchar(100) ,
    data_nascimento date
);

select * from cliente;

create table modelo (
	modelo_id serial primary key,
	codigo_modelo integer,
	decricao varchar (40),
	ano numeric (4)
);

select * from modelo;

create table veiculo(
	id serial primary key,
	placa varchar(8),
	client_id int,
	modelo_id int,
	foreign key (client_id) references cliente(cliente_id),
    foreign key (modelo_id) references modelo(modelo_id)
);

create table patio (
	id serial primary key,
	num integer ,
	endereco varchar (40),
	capacidade integer
);

create table estaciona(
    id serial primary key,
    num integer,
    patio_id integer,
    veiculo_id integer,
    data_entrada date,
    data_saida date,
    hora_entrada time,
    hora_saida time,
    foreign key (patio_id) references patio(id),
    foreign key (veiculo_id) references veiculo(id),
    check (hora_entrada between '08:00:00' and '22:00:00'),
    check (hora_saida between '08:00:00' and '22:00:00'),
    check (hora_saida >= hora_entrada)

);

select * from patio;



-- Questão 1:
--(x) Exiba a placa e o nome dos donos de todos os veículos;
--(x)Exiba o CPF e o nome do cliente que possui o veículo de placa “JJJ-2020”;
--(x) Exiba a placa e a cor do veículo que possui o código de estacionamento 1;
--(x) Exiba a placa e o ano do veículo que possui o código de estacionamento 1;
--(x) Exiba a placa, o ano do veículo e a descrição de seu modelo, se ele possuir ano a partir de 2000.


select v.placa, c.nome from veiculo v
inner join cliente c on v.client_id = c.cliente_id;

select c.cpf, c.nome from veiculo v
inner join cliente c on v.client_id = c.cliente_id
where v.placa = 'JJJ-2020';

select v.placa, m.decricao from veiculo v
inner join modelo m on v.modelo_id = m.modelo_id
where v.id = 1;

select v.placa, m.ano from veiculo v
inner join modelo m on v.modelo_id = m.modelo_id
where v.id = 1;

select v.placa, m.ano, m.decricao from veiculo v
inner join modelo m on v.modelo_id = m.modelo_id
where m.ano >= 2000;

-- seleciona 
select veiculo.placa, modelo.ano
from veiculo
join modelo on veiculo.modelo_id = modelo.modelo_id
join estaciona on veiculo.id = estaciona.veiculo_id
where estaciona.id = 1;



--inserir dados na tabela cliente
insert into cliente (cpf, nome, data_nascimento) 
values (123456789, 'João', '1990-01-01')
, (987654321, 'Maria', '1990-01-01')
, (123456789, 'José', '1990-01-01')
, (987654321, 'Ana', '1990-01-01')
, (123456789, 'Pedro', '1990-01-01')
, (987654321, 'Paula', '1990-01-01')
, (123456789, 'Carlos', '1990-01-01')
, (987654321, 'Carla', '1990-01-01')
, (123456789, 'Marcos', '1990-01-01')
, (987654321, 'Marcia', '1990-01-01')
, (123456789, 'Lucas', '1990-01-01');


--inserir dados na tabela modelo
insert into modelo (codigo_modelo, decricao, ano)
values (1, 'Fusca', 1990)
, (2, 'Fusca', 1991)
, (3, 'Fusca', 1992)
, (4, 'Fusca', 1993)
, (5, 'Fusca', 1994)
, (6, 'Fusca', 1995)
, (7, 'Fusca', 1996)
, (8, 'Fusca', 1997)
, (9, 'Fusca', 1998)
, (10, 'Fusca', 1999);


--inserir dados na tabela veiculo
insert into veiculo (placa, client_id, modelo_id)
values ('AAA-1111', 1, 1)
, ('BBB-2222', 2, 2)
, ('CCC-3333', 3, 3)
, ('DDD-4444', 4, 4)
, ('EEE-5555', 5, 5)
, ('FFF-6666', 6, 6)
, ('GGG-7777', 7, 7)
, ('HHH-8888', 8, 8)
, ('III-9999', 9, 9)
, ('JJJ-2020', 10, 10);


--inserir dados na tabela patio
insert into patio (num, endereco, capacidade)
values (1, 'Rua 1', 10)
, (2, 'Rua 2', 10)
, (3, 'Rua 3', 10)
, (4, 'Rua 4', 10)
, (5, 'Rua 5', 10)
, (6, 'Rua 6', 10)
, (7, 'Rua 7', 10)
, (8, 'Rua 8', 10)
, (9, 'Rua 9', 10)
, (10, 'Rua 10', 10);


--inserir dados na tabela estaciona
insert into estaciona (num, patio_id, veiculo_id, data_entrada, data_saida, hora_entrada, hora_saida)
values (1, 1, 1, '2020-01-01', '2020-01-01', '08:00:00', '22:00:00')
, (2, 2, 2, '2020-01-01', '2020-01-01', '08:00:00', '22:00:00')
, (3, 3, 3, '2020-01-01', '2020-01-01', '08:00:00', '22:00:00')
, (4, 4, 4, '2020-01-01', '2020-01-01', '08:00:00', '22:00:00')
, (5, 5, 5, '2020-01-01', '2020-01-01', '08:00:00', '22:00:00')
, (6, 6, 6, '2020-01-01', '2020-01-01', '08:00:00', '22:00:00')
, (7, 7, 7, '2020-01-01', '2020-01-01', '08:00:00', '22:00:00')
, (8, 8, 8, '2020-01-01', '2020-01-01', '08:00:00', '22:00:00')
, (9, 9, 9, '2020-01-01', '2020-01-01', '08:00:00', '22:00:00')
, (10, 10, 10, '2020-01-01', '2020-01-01', '08:00:00', '22:00:00');


-- Questão 3:
--(x) Exiba em ordem crescente o nome dos donos de todos os veículos;
--(x) Exiba o cliente que estacionou o carro por mais horas;
--(x) Exiba a quantidade de veículos por cliente estacionados em cada pátio. Informe o nome do proprietário, o nome do pátio e ordene do proprietário com mais carros para o proprietário com menos carros.
--(x) Informe a média de horas alocadas para estacionamento por dia em cada pátio.
--(x) Informe o cliente que permaneceu pelo menor tempo em algum dos pátios. Mostre o nome do cliente, o código do pátio e número de horas.


--  exemmplo professor 


create table Cliente(
	id serial primary key,
	cpf integer,
	nome varchar(60),
	dtnasc date
);

create table Modelo(
	id serial primary key,
	codModelo INTEGER,
	descricao VARCHAR(40),
	ano NUMERIC(4)
);

create table Veiculo(
	id serial primary key,
	placa varchar(8),
	cor varchar(20),
	cliente_id integer,
	modelo_id integer,
	foreign key (cliente_id) references cliente(id),
	foreign key (modelo_id) references modelo(id)
);

create table Patio(
	id serial primary key,
	num INTEGER,
	endereco VARCHAR(40),
	capacidade INTEGER
);

create table Estaciona(
	id serial primary key,
	num INTEGER,
	patio_id integer,
	veiculo_id integer,
	dataEntrada DATE,
	dataSaida DATE,
	horarioEntrada TIME,
	horarioSaida TIME,
	foreign key (patio_id) references Patio(id),
	foreign key (veiculo_id) references Veiculo(id),
	check(horarioEntrada between '8:00:00' and '22:00:00'),
	check(horarioSaida between '8:00:00' and '22:00:00'),
	check(horarioSaida>=horarioEntrada)
);

-- Inserindo alguns valores
-- Inserindo valores:
INSERT INTO Cliente (cpf, nome, dtNasc)
VALUES
  (111111111, 'João Silva', '1990-01-01'),
  (222222222, 'Maria Santos', '1985-05-10'),
  (333333333, 'Pedro Oliveira', '1992-08-15'),
  (444444444, 'Ana Souza', '1982-12-20'),
  (555555555, 'Lucas Pereira', '1998-03-25'),
  (666666666, 'Mariana Costa', '1995-07-05'),
  (777777777, 'Carlos Rodrigues', '1991-09-12'),
  (888888888, 'Camila Almeida', '1987-11-18'),
  (999999999, 'Gustavo Santos', '1993-04-30'),
  (123456789, 'Larissa Fernandes', '1989-06-08');

 
INSERT INTO Modelo (codModelo, descricao, ano)
VALUES
  (1, 'Sedan', 2012),
  (2, 'SUV', 2004),
  (3, 'Hatchback', 2005),
  (4, 'Caminhonete', 2007),
  (5, 'Esportivo', 2007),
  (6, 'Coupé', 2020);
  
INSERT INTO Veiculo (placa, cor, cliente_id, modelo_id)
VALUES
  ('ABC1234', 'Prata', 1, 1),
  ('DEF5678', 'Preto', 2, 2),
  ('GHI9012', 'Branco', 3, 3),
  ('jjj-2020', 'Azul', 4, 4),
  ('MNO7890', 'Vermelho', 5, 5),
  ('PQR2345', 'Cinza', 6, 6),
  ('STU6789', 'Prata', 1, 2),
  ('VWX0123', 'Preto', 2, 3),
  ('YZA4567', 'Branco', 3, 4),
  ('BCD8901', 'Azul', 4, 5),
  ('EFG2345', 'Vermelho', 5, 6),
  ('HIJ6789', 'Cinza', 6, 1);
  
INSERT INTO Patio (num, endereco, capacidade)
VALUES
  (1, 'Rua A', 20),
  (2, 'Rua B', 15),
  (3, 'Rua C', 10),
  (4, 'Rua D', 25);
  
INSERT INTO Estaciona (num, patio_id, veiculo_id, dataEntrada, dataSaida, horarioEntrada, horarioSaida)
VALUES
  (1, 1, 1,'2023-06-01', '2023-06-01', '08:00:00', '09:30:00'),
  (2, 2, 2,'2023-06-01', '2023-06-01', '09:30:00', '11:00:00'),
  (3, 3, 3,'2023-06-01', '2023-06-01', '12:00:00', '14:00:00'),
  (4, 1, 5,'2023-06-02', '2023-06-02', '10:00:00', '12:30:00'),
  (5, 2, 6,'2023-06-02', '2023-06-02', '14:00:00', '16:00:00'),
  (6, 4, 7,'2023-06-02', '2023-06-02', '16:30:00', '18:30:00'),
  (7, 1, 8,'2023-06-03', '2023-06-03', '08:30:00', '09:45:00'),
  (8, 2, 9,'2023-06-03', '2023-06-03', '10:30:00', '12:30:00'),
  (9, 3, 10,'2023-06-03', '2023-06-03', '13:00:00', '15:00:00'),
  (10, 1, 11,'2023-06-04', '2023-06-04', '09:00:00', '11:30:00'),
  (11, 2, 12,'2023-06-04', '2023-06-04', '12:30:00', '14:30:00'),
  (12, 3, 1,'2023-06-04', '2023-06-04', '15:30:00', '17:30:00'),
  (13, 1, 2,'2023-06-05', '2023-06-05', '09:00:00', '10:15:00'),
  (14, 2, 4,'2023-06-05', '2023-06-05', '11:30:00', '13:00:00'),
  (15, 4, 11,'2023-06-05', '2023-06-05', '13:30:00', '15:30:00'),
  (15, 4, 3,'2023-06-06', '2023-06-06', '13:30:00', '15:30:00');
 
INSERT INTO Estaciona (num, patio_id, veiculo_id, dataEntrada, horarioEntrada)
	VALUES
  (7, 1, 5, '2023-06-13', '08:30:00'),
  (8, 2, 3, '2023-06-13', '10:30:00'),
  (9, 3, 9, '2023-06-13', '13:00:00');
 
 -- Exiba a placa e o nome dos donos de todos os veículos;
 select veiculo.placa, cliente.nome
 from veiculo
 join Cliente on veiculo.cliente_id = cliente.id;

-- Exiba o CPF e o nome do cliente que possui o veículo de placa “JJJ-2020”;
select cliente.cpf, cliente.nome
from cliente
join veiculo on veiculo.cliente_id = cliente.id
where veiculo.placa = 'jjj-2020';

-- Exiba a placa e a cor do veículo que possui o código de estacionamento 1;
select veiculo.placa, veiculo.cor
from veiculo
join estaciona on estaciona.veiculo_id = veiculo.id
where estaciona.num = 1;

--Exiba a placa e o ano do veículo que possui o código de estacionamento 1;
select veiculo.placa, modelo.ano
from veiculo
join modelo on modelo.id = veiculo.modelo_id
join estaciona on estaciona.veiculo_id = veiculo.id
where estaciona.num = 1;

-- Exiba a placa, o ano do veículo e a descrição de seu modelo, 
-- se ele possuir ano a partir de 2000.

select veiculo.placa, modelo.ano as ano, modelo.descricao
from veiculo
join modelo on modelo.id = veiculo.modelo_id
where ano > 2000;

 
select v.placa , m.descricao
from cliente c 
join veiculo v on c.id  = v.cliente_id 
join modelo m on m.id = v.modelo_id
where c.nome  = 'Pedro Oliveira';




select v.placa , m.descricao
from cliente c 
join veiculo v on c.id  = v.cliente_id 
join modelo m on m.id = v.modelo_id
where c.nome  = 'Carlos Rodrigues';



select date(dataEntrada) as data, count(*) as quantidade
from estaciona
group by dataEntrada;



select extract(year from dataEntrada) as ano, count(*) as quantidade
from estaciona
group by ano;



select extract(month from dataEntrada) as mes, count(*) as quantidade
from estaciona
group by mes;



select extract(day from dataEntrada) as dia, count(*) as quantidade
from estaciona
group by dia;



select extract(hour from horarioEntrada) as hora, count(*) as quantidade --
from estaciona
group by hora;

SELECT to_char(date '2022-01-01', 'Day'); -- Saturday


--(x) 1- Liste os modelos de veículos que possuem mais de 1 unidade cadastrada;
--(x) 2- Obtenha a média de anos dos modelos de veículos que tenham no mínimo 1 unidade cadastrada;
--(x) 3- Liste os clientes que possuem mais de 1 carro cadastrado
--(x) 4- Exiba os pátios que possuem uma capacidade superior a 10 e que possuam pelo menos um estacionamento realizado
--() 5- Exiba os pátios que possuem uma capacidade superior a 10 e, somados os carros estacionados em algum momento no pátio, o resultado seja pelo menos 40% da sua capacidade do pátio.
--() 6- Selecione todos os clientes cujo nome possui a sequência "Silva" em qualquer parte.
--() 7- Selecione todos os clientes cujo nome começa com a letra "A".


-- 1
select m.descricao, count(*) as quantidade  
from veiculo v  
join modelo m on m.id = v.modelo_id
group by m.descricao
having count(*) > 1;

-- 2
select avg(m.ano) as media
from veiculo v
join modelo m on m.id = v.modelo_id
group by m.descricao
having count(*) > 1;

--3
select c.nome, count(*) as quantidade
from cliente c
join veiculo v on v.cliente_id = c.id
group by c.nome
having count(*) > 1;


-- 4 
select p.endereco, p.capacidade
from patio p
join estaciona e on e.patio_id = p.id
group by p.endereco, p.capacidade
having p.capacidade > 10;

-- 5 
select p.endereco, p.capacidade
from patio p
join estaciona e on e.patio_id = p.id
group by p.endereco, p.capacidade
having p.capacidade > 10 and count(*) > 0;

-- 6
select c.nome
from cliente c
where c.nome like '%Silva%';

-- 7
select c.nome
from cliente c
where c.nome like 'A%';