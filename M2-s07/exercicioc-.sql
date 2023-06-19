create table usuario (
    id_usuario serial primary key,
    nome_usuario varchar(100)
);

create table produto (
    id_produto serial primary key,
    nome_produto varchar(100)
);

create table venda (
    id_usuario integer,
    id_produto integer,
    valor_produto numeric(10,2),
    quantidade_produto integer,
    dt_compra date,
    foreign key (id_usuario) references usuario(id_usuario),
    foreign key (id_produto) references produto(id_produto)
);

insert into usuario (nome_usuario) 
values ('Derpson da Silva'),
       ('Joao M'),
       ('Paulo'),
       ('Maria');

-- 2 vendsa por usuario exemplo

insert into venda (id_usuario, id_produto, valor_produto, quantidade_produto, dt_compra)

--() Crie um script que ordene os usuários que mais gastaram no mês da Black Friday, independente do ano. Esse script deve conter o nome do usuário e o valor total gasto no mês da black friday

select u.nome_usuario, sum(v.valor_produto) as valor_total
from usuario u
inner join venda v on v.id_usuario = u.id_usuario
where extract(month from v.dt_compra) = 11
group by u.nome_usuario
order by valor_total desc;