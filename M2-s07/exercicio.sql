-- tabela: usuario
create table usuario (
    id serial primary key,
    nome varchar(100) ,
    login varchar(100),
    senha varchar(100),
    email varchar(100),
    dt_nascimento date ,
    cpf varchar(100),
    rg varchar(100)  
     
);

select * from usuario;

-- tabela: jogo
create table jogo (
    id serial primary key,
    nome varchar(100),
    data_lancamento date,
    plataforma varchar(100),
    genero varchar(100),
    foto varchar(100),
    video varchar(100)
);

select * from jogo;

-- tabela: plataforma
create table plataforma (
    id serial primary key,
    nome varchar(100),
    fk_jogo integer  ,
    fk_usuario integer ,
    foreign key (fk_jogo) references jogo(id),
    foreign key (fk_usuario) references usuario(id)
);

select * from plataforma;


insert into jogo (nome, data_lancamento, plataforma, genero, foto, video)
values ('The Sims 4 Base', '2014-09-02', 'Playstation 4, Playstation 5, Desktop', 'Simulação da Vida Real', 'foto', 'video');


insert into usuario (nome, login, senha, email, dt_nascimento, cpf, rg)
values ('Derpson da Silva', 'derpinho', 'derpinho91', 'derpinho91@hotmail.com', '1991-01-01', '123.123.123-12', '4.123.123');


