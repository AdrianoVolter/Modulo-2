-- Considere um sistema de reservas de viagens, em que os usuários podem reservar passagens, com o seguinte modelo:

-- Usuario: id_usuario nome_usuario

-- Viagem: id_viagem destino data_viagem valor_passagem

-- Reserva: id_usuario, id_viagem, data_reserva

--() Crie um script SQL que ordene os usuários que mais gastaram em reservas de viagens no mês de julho, independente do ano. Esse script deve conter o nome do usuário e o valor total gasto nas reservas no mês de julho.

create table usuario (
    id_usuario serial primary key,
    nome_usuario varchar(50) not null
);

create table viagem (
    id_viagem serial primary key,
    destino varchar(50) not null,
    data_viagem date not null,
    valor_passagem numeric(10,2) not null,
    id_usuario integer not null references usuario(id_usuario)
);

create table reserva (
    id_usuario integer not null references usuario(id_usuario),
    id_viagem integer not null references viagem(id_viagem),
    data_reserva date not null,
    primary key (id_usuario, id_viagem)
);


select u.nome_usuario, sum(v.valor_passagem) as valor_total
from usuario u
inner join viagem v on v.id_usuario = u.id_usuario
where extract(month from v.data_viagem) = 7
group by u.nome_usuario
order by valor_total desc;
