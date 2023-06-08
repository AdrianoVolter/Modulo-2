
-- Tabela "eventos":
CREATE TABLE evento (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    data DATE, -- registrar apenas eventos futuros
    check (data > current_date),
    foreign key (local_id) references local(id),
    foreign key (categoria_id) references categoria(id),
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

SELECT * FROM eventos;

-- Tabela "local":
CREATE TABLE local (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    endereco VARCHAR(100),
    capacidade INTEGER CHECK (capacidade > 0)
);

SELECT * FROM local;

-- Tabela "categorias":
CREATE TYPE categoria AS ENUM ('Conferência', 'Seminário', 'Workshop');

CREATE TABLE categoria (
    id SERIAL PRIMARY KEY,
    nome categoria,
    descricao VARCHAR(100)
);

SELECT * FROM categoria;

-- Tabela "participantes":

CREATE TABLE participante (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

SELECT * FROM participante;

-- Tabela "participantes_eventos":

CREATE TABLE participante_evento (
    participante_id INTEGER,
    evento_id INTEGER,
    foreign key (participante_id) references participante(id),
    foreign key (evento_id) references evento(id)
);

SELECT * FROM participante_evento;



