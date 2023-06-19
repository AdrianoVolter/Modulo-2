

-- Dado determinado modelo conceitual de dados de cidade abaixo:

-- Cidade:
-- id_cidade,
-- nome_cidade,
-- id_estado,
-- capital ('True' ou ‘False’),
-- qtd_populacao

-- Estado:
-- id_estado,
-- id_pais,
-- nome_estado

-- Pais:
-- id_pais,
-- nome_pais,
-- continente


--() Crie um script em SQL, informando nome do país, nome do estado e nome da cidade, de todas as capitais que possuam população acima de 500 mil habitantes, cujos estados tenham nome de santo (ou seja, iniciem com São, Santo, San ou Saint) em países da América (América do Norte, América Central e América do Sul). Os resultados devem ser ordenados por nome do país, nome do estado e nome da cidade.

select p.nome_pais, e.nome_estado, c.nome_cidade
from pais p
inner join estado e on e.id_pais = p.id_pais
inner join cidade c on c.id_estado = e.id_estado
where c.capital = 'True' and c.qtd_populacao > 500000 and p.continente = 'América do Norte' or p.continente = 'América Central' or p.continente = 'América do Sul' and e.nome_estado like 'São%' or e.nome_estado like 'Santo%' or e.nome_estado like 'San%' or e.nome_estado like 'Saint%'

-- Considerando o script do exercício anterior [M2S07] Ex 5, crie um script que busque, ao invés dos 10 países que tenham mais habitantes, os países que contenham população maior que a população total da Espanha (calculada como a soma da população de todas as cidades).

-- Dica: é necessário utilizar o Having

select p.nome_pais, sum(c.qtd_populacao) as populacao
from pais p
inner join estado e on e.id_pais = p.id_pais
inner join cidade c on c.id_estado = e.id_estado
group by p.nome_pais
having sum(c.qtd_populacao) > (select sum(qtd_populacao) from cidade where id_estado = 2)


