CREATE DATABASE dbDaoTeste;

USE dbDaoTeste;

create table publicacao(
	id int not null identity(1,1),
	titulo varchar(100) not null,
	descricao varchar(50) not null,
	
	constraint pk_publicacao primary key (id)
);

/*MELHOR EXECUTAR UMA PUBLICACAO DA BALDAN, SALVAR AS EXISTENTES
insert into publicacao (titulo, descricao)
	values('Oferta de Safra de Caf� Especial',' Se voc� � uma marca de caf� em busca dos melhores gr�os que valoriza a qualidade, n�o perca a chance de adquirir
 nossos gr�os especiais. Entre em contato para saber mais sobre nossos produtos.

 - Origem: Nossos gr�os de caf� s�o cultivados em nossa pr�pria lavoura.

 - Qualidade Premium: Cada gr�o � selecionado para garantir a mais alta qualidade.

 - Sacos de 10 kg: Disponibilizamos sacos de 10 kg por 250,00 para atender �s suas necessidades.
 Entre em contato conosco:
 
 - Email: contato@belavistacafe.com
 ouTelefone: (11) 9876-5432');


select titulo, descricao from publicacao;
*/