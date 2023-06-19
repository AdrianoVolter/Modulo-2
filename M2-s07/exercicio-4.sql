
create table ator (
    id serial primary key,
    nome varchar(100),
    dt_nascimento date,
    altura float,
    peso float
);

create table filme (
    id serial primary key,
    nome varchar(100),
    duracao integer
);

create table genero_filme (
    id_filme integer,
    id_genero integer,
    foreign key (id_filme) references filme(id),
    foreign key (id_genero) references genero(id)
);

create table genero (
    id serial primary key,
    nome varchar(100)
);

--(x) Escreva uma consulta SQL para selecionar o nome do filme e sua duração, ordenados pela duração do filme, de todos os filmes cujo título termina com a palavra "Ação".
select nome, duracao 
from filme 
where nome like '%Ação' 
order by duracao;

