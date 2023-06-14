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
--() Exiba em ordem crescente o nome dos donos de todos os veículos;
--() Exiba o cliente que estacionou o carro por mais horas;
--() Exiba a quantidade de veículos por cliente estacionados em cada pátio. Informe o nome do proprietário, o nome do pátio e ordene do proprietário com mais carros para o proprietário com menos carros.
--() Informe a média de horas alocadas para estacionamento por dia em cada pátio.
--() Informe o cliente que permaneceu pelo menor tempo em algum dos pátios. Mostre o nome do cliente, o código do pátio e número de horas.
