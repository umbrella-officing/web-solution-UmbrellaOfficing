create database umbrella_officing;
use umbrella_officing;

create table usuarios (
nome_user varchar(100) not null,
email_user varchar(30) not null,
cpf_user char(14) primary key not null,
senha_user char(60) not null,
dt_nasc_user date not null,
celular_user varchar(14),
profissao varchar(30),
end_user varchar(60),
telefone_user varchar(14),
genero_user varchar(9),
rg_user varchar(20),
orgao_expedidor varchar(60),
link_instagram longtext,
link_whats_user longtext ,
link_facebook longtext,
link_linkedin longtext,
sobre_mim text,
perfil_profissional text,
preferencias_homeoffincing char(5),
preferencias_coworking char(5),
fotos_user longblob,
data_cadastro datetime
);

select*from usuarios;

create table administradores (
foto_admin longblob,
nome_admin varchar(100),
cpf_admin char(11) primary key,
senha_admin char(8)
);

select*from administradores;

create table espacos (
status_anun varchar(7), 
cod_anun int auto_increment primary key,
tipo_ambiente_anun varchar(9),
categoria_anun varchar(15),
subcategoria_anun varchar(15),
titulo_anun varchar(30),
descricao_anun text,
fotos_anun longblob,
localizacao varchar(60),
favoritado char(3),
data_cadastro_anun datetime,
cpf_user char(11),
foreign key (cpf_user) references usuarios (cpf_user)
);

ALTER TABLE espacos
modify subcategoria_anun varchar(100);

select*from espacos;

create table sala (
cod_sala int auto_increment primary key,
modelo_trabalho varchar(20),
tipo_sala varchar(30),
quant_pessoas_sala int,
acesso_banheiros_sala int,
tamanho_sala varchar(5),
qualid_wifi_sala varchar(5),
qualid_computador_sala varchar(5),
qte_computadores_sala int,
qte_tomadas_sala int, 
qte_mesas_sala int, 
qte_assentos_sala int, 
ar_condicionado_sala char(3),
qte_janelas_sala int,
capacidade_pessoas varchar(2),
data_reserva date,
cancelamento char(3),
avaliação_sala varchar(5),
horario_reservado time,
preco_sala decimal(6,2),
status_reserva varchar(7),
cod_anun int,
fotos_sala longblob,
compartilhamento_sala char(3),
acesso_outras_salas char(3),
foreign key(cod_anun) references espacos (cod_anun)
);

select*from sala;

create table notificacoes (
data_notificacao date,
titulo_notificacao varchar(20),
descricao_notificacao text,
status_notificacao varchar(20), 
cod_notificacao int auto_increment primary key,
cpf_user char(11),
foreign key(cpf_user) references usuarios (cpf_user)
); 

select*from notificacoes;

create table artigo (
cod_artigo int auto_increment primary key,
titulo_do_artigo varchar(30),
conteudo_do_artigo text,
categoria_artigo varchar(30),
data_artigo date,
cpf_admin char(11),
foreign key(cpf_admin) references administradores (cpf_admin)
);

select*from artigo;

create table avaliacao (
num_estrelas varchar(5),
cod_avalia int auto_increment primary key,
data_avalia date,
texto_avalia varchar(100),
cod_anun int,
foreign key(cod_anun) references espacos(cod_anun)
);

select*from avaliacao;

create table admin_user (
cpf_admin char(11),
cpf_user char(11),
foreign key(cpf_admin) references administradores (cpf_admin),
foreign key(cpf_user) references usuarios (cpf_user)
);

select*from admin_user;

create table admin_espacos (
cpf_admin char(11),
cod_anun int,
foreign key(cpf_admin) references administradores (cpf_admin),
foreign key(cod_anun) references espacos (cod_anun)
);

select*from admin_espacos;

create table aluguel (
cpf_admin char(11),
cod_sala int,
foreign key(cpf_admin) references administradores (cpf_admin),
foreign key(cod_sala) references sala (cod_sala)
);

select*from aluguel;

create table usuario_avalia (
cpf_user char(11),
cod_avalia int,
foreign key(cpf_user) references usuarios (cpf_user),
foreign key(cod_avalia) references avaliacao (cod_avalia)
);

create table teste (
  id_usuario int NOT NULL AUTO_INCREMENT,
  nome_usuario varchar(45) DEFAULT NULL,
  user_usuario varchar(45) DEFAULT NULL,
  senha_usuario char(60) DEFAULT NULL,
  email_usuario varchar(45) DEFAULT NULL,
  fone_usuario varchar(11) DEFAULT NULL,
  imagemperfil_usuario longblob,
  tipo_usuario int DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
);

select*from teste;

INSERT INTO teste VALUES (1,'Helvética','helvinha','$2a$12$/YjwhOmCrHVM.st6RBNc4OodyTOXGITgYAxx5Bysad0MaDzhapk6i','helvinh@gmail.com','11941549878',null,1);

insert into usuarios (nome_user, cpf_user, dt_nasc_user, telefone_user, celular_user, email_user, senha_user,
genero_user, rg_user, orgao_expedidor, end_user, sobre_mim, perfil_profissional, preferencias_homeoffincing, 
preferencias_coworking, data_cadastro, profissao) values ('Aline dos Santos Ribeiro Luna', 12345678900, 
'2000-01-01', '+5511999999999', '+5511989999999', 'aline@gmail.com', '123@5678', 'Feminino', '1234567P', 
'Secretária de Segurança Pública de SP', 'Rua do Paço, nº 157 - Engenho Novo - Barueri/SP - 06212-121',
'Oi, meu nome é Aline e trabalho como web design desde 2021, quando  terminei o curso de Design 
na USP.', 'Sou nômade digital e possuo uma rotina de trabalho intensa com  viagens. 
Fico inspirada em locais arbóreos e procuro por ambientes agradáveis.', 2, 5, '2020-02-20', 'Web Design');

insert into espacos (status_anun, tipo_ambiente_anun, categoria_anun, subcategoria_anun, titulo_anun, 
descricao_anun, localizacao, favoritado, data_cadastro_anun, cpf_user) 
values ('Ativo', 'Ambiente adaptado', 'Apartamento', 'Apartamento comum', 'Escritório Lape', 'Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. \nAenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo', 
'Rio das Flores, Rio de Janeiro - Brasil', 'Sim', '2019-03-06 07:45', '12345678900');


INSERT INTO sala (modelo_trabalho, tipo_sala, quant_pessoas_sala, acesso_banheiros_sala, tamanho_sala, qualid_wifi_sala, qualid_computador_sala, 
qte_computadores_sala, qte_tomadas_sala, qte_mesas_sala, qte_assentos_sala, ar_condicionado_sala, qte_janelas_sala,
 capacidade_pessoas, data_reserva, horario_reservado, preco_sala, status_reserva, cod_anun, compartilhamento_sala) values 
 ('Privado', '', '3', '3', '10 m²', 'Alta', 'Alta', '3', '10', '3', '3', 'Sim', '5', '6', '2020-03-03', '22:00', '150.00', 
 'a', '1', 'c');

select * from sala;

