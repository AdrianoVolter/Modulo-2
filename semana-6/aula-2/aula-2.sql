CREATE TABLE Autor (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    nacionalidade VARCHAR(100),
    data_nascimento DATE
);

select * from autor;

CREATE TABLE editora (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    pais VARCHAR(100),
    fundacao DATE
);

select * from editora;



CREATE TABLE livro (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100),
    ano_publicacao DATE,
    autor_id INTEGER,
    editora_id INTEGER,
    foreign key (autor_id) references autor(id) ,
    foreign key (editora_id) references editora(id) 
);

select * from livro;

insert into editora (nome, pais, fundacao) values 
	('Brasil', 'Brasil' , '2020-02-23'),
	('Brasil', 'Brasil' , '2020-02-23'),
	('Brasil', 'Brasil' , '2020-02-23');
	

insert into autor (nome, nacionalidade, data_nascimento) values 
	('Adriano', 'Brasil' , '1984-02-23'),
	('Adr', 'Brasil' , '1999-02-21'),
	('Adriano', 'Brasil' , '1984-02-23');
	
select * from autor;
	
	
INSERT INTO livro (titulo, ano_publicacao, autor_id, editora_id) values 
	('Livro 1', '1987-21-31' , 
	 COALESCE((SELECT id FROM autor), 0),
	 COALESCE((SELECT id FROM editora), 0)
	),
	('Livro 2', '1999-01-31' , 
	 COALESCE((SELECT id FROM autor), 0),
	 COALESCE((SELECT id FROM editora), 0)
	),
	('Livro 3', '1977-21-22' , 
	 COALESCE((SELECT id FROM autor), 0),
	 COALESCE((SELECT id FROM editora), 0)
	);


