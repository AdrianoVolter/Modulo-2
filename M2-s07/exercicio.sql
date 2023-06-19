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
    fk_jogo integer references jogo(id),
    fk_usuario integer references usuario(id)
);

select * from plataforma;



