CREATE TABLE Autor (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    nacionalidade VARCHAR(100),
    data_nascimento DATE
);

SELECT * FROM autor;

CREATE TABLE editora (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    pais VARCHAR(100),
    fundacao DATE
);

SELECT * FROM editora;

CREATE TABLE livro (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100),
    ano_publicacao DATE,
    autor_id INTEGER,
    editora_id INTEGER,
    FOREIGN KEY (autor_id) REFERENCES autor(id),
    FOREIGN KEY (editora_id) REFERENCES editora(id)
);

SELECT * FROM livro;

INSERT INTO editora (nome, pais, fundacao) VALUES 
    ('Brasil', 'Brasil', '2020-02-23'),
    ('Brasil', 'Brasil', '2020-02-23'),
    ('Brasil', 'Brasil', '2020-02-23');

INSERT INTO autor (nome, nacionalidade, data_nascimento) VALUES 
    ('Adriano', 'Brasil', '1984-02-23'),
    ('Adr', 'Brasil', '1999-02-21'),
    ('Adriano', 'Brasil', '1984-02-23');

SELECT * FROM autor;

INSERT INTO livro (titulo, ano_publicacao, autor_id, editora_id) VALUES 
    ('Livro 1', '1987-01-31',
    (SELECT id FROM autor WHERE nome = 'Adriano' LIMIT 1),
    (SELECT id FROM editora WHERE nome = 'Brasil' LIMIT 1)),
    ('Livro 2', '1987-02-28',
    (SELECT id FROM autor WHERE nome = 'Adr' LIMIT 1),
    (SELECT id FROM editora WHERE nome = 'Brasil' LIMIT 1)),
    ('Livro 3', '1987-03-15',
    (SELECT id FROM autor WHERE nome = 'Adriano' LIMIT 1),
    (SELECT id FROM editora WHERE nome = 'Brasil' LIMIT 1));

SELECT * FROM livro;
