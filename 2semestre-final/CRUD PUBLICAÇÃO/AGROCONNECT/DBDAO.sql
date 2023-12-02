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
	values('Oferta de Safra de Café Especial',' Se você é uma marca de café em busca dos melhores grãos que valoriza a qualidade, não perca a chance de adquirir
 nossos grãos especiais. Entre em contato para saber mais sobre nossos produtos.

 - Origem: Nossos grãos de café são cultivados em nossa própria lavoura.

 - Qualidade Premium: Cada grão é selecionado para garantir a mais alta qualidade.

 - Sacos de 10 kg: Disponibilizamos sacos de 10 kg por 250,00 para atender às suas necessidades.
 Entre em contato conosco:
 
 - Email: contato@belavistacafe.com
 ouTelefone: (11) 9876-5432');


select titulo, descricao from publicacao;
*/