create database umbrella_officing;
use umbrella_officing;


/*CREATE TABLE usuarios (nome_user Texto(1),dt_nasc_user Texto(1), telefone_user Texto(1),
e-mail_user Texto(1), senha_user Texto(1), rg_user Texto(1), genero_user Texto(1),
end_user Texto(1), redes_sociais_perfil Texto(1), cpf_user Texto(1) PRIMARY KEY, preferencias_homeoffincing Texto(1), preferencias_coworking Texto(1),
orgão_expedidor Texto(1), foto_user Texto(1), sobre_mim_user Texto(1), perfil_profissional_user Texto(1),
data_cadastro_user Texto(1), profissão Texto(1), cel_user Texto(1)
)*/

create table usuarios (
nome_user varchar(100) not null,
cpf_user char(11) primary key not null,
dt_nasc_user date not null,
telefone_user varchar(14),
celular_user varchar(14),
email_user varchar(30) not null,
senha_user char(8) not null,
genero_user varchar(9),
rg_user varchar(20),
orgao_expedidor varchar(60),
end_user varchar(60),
instagram_user varchar(200),
whats_user varchar(200),
facebook_user varchar(200),
linkedin varchar(200),
sobre_mim varchar(200),
perfil_profissional varchar(150),
preferencias_homeoffincing char(5),
preferencias_coworking char(5),
fotos_user varchar(150),
data_cadastro datetime,
profissao varchar(30)
);

select*from usuarios;

/*CREATE TABLE administradores (foto_admin Texto(1),
nome_admin Texto(1), cpf_admin Texto(1) PRIMARY KEY, senha_admin Texto(1))*/
create table administradores (
foto_admin varchar(150),
nome_admin varchar(100),
cpf_admin char(11) primary key,
senha_admin char(8)
);

select*from administradores;

/*CREATE TABLE espacos (descricao_anun Texto(1), status_anun Texto(1), titulo_anun Texto(1),
tipo_ambiente_anun Texto(1), data_cadastro_anun Texto(1), fotos_anun Texto(1), categoria_anun Texto(1), subcategoria_anun Texto(1),
favoritado Texto(1), localizacao_anun Texto(1), cod_anun Texto(1) PRIMARY KEY, cpf_user Texto(1), 
FOREIGN KEY(cpf_user) REFERENCES usuarios (cpf_user)
)*/
create table espacos (
status_anun varchar(7), 
cod_anun int auto_increment primary key,
tipo_ambiente_anun varchar(9),
categoria_anun varchar(15),
subcategoria_anun varchar(15),
titulo_anun varchar(30),
descricao_anun varchar(100),
fotos_anun varchar(150),
localizacao varchar(60),
favoritado char(3),
data_cadastro_anun datetime,
cpf_user char(11),
foreign key (cpf_user) references usuarios (cpf_user)
);

select*from espacos;

/*CREATE TABLE sala (tamanho_sala Texto(1), qte_mesas_sala Texto(1), status_reserva Texto(1),
data_reserva_sala Texto(1), qualid_wifi_sala Texto(1), avaliação_sala Texto(1), cancelamento Texto(1),
qte_janelas_sala Texto(1), horario_reservado Texto(1), qte_tomadas_sala Texto(1), qte_ar-condicionado_sala Texto(1),
capacidade_pessoas Texto(1), acesso_banheiros_sala Texto(1), preco Texto(1), quant_pessoas_sala Texto(1), cod_sala Texto(1) PRIMARY KEY,
qte_assentos_sala Texto(1), modelo_trabalho Texto(1), qte_computadores_sala Texto(1), cod_anun Texto(1),
FOREIGN KEY(cod_anun) REFERENCES espacos (cod_anun))*/

create table sala (
cod_sala int auto_increment primary key,
modelo_trabalho varchar(20),
tipo_sala varchar(30),
quant_pessoas_sala varchar(2),
acesso_banheiros_sala varchar(2),
tamanho_sala varchar(5),
qualid_wifi_sala varchar(5),
qte_computadores_sala varchar(2),
qte_tomadas varchar(2), 
qte_mesas varchar(2), 
qte_assentos varchar(2), 
qte_ar_condicionado varchar(2),
qte_janelas varchar(2),
capacidade_pessoas varchar(2),
data_reserva date,
cancelamento char(3),
avaliação_sala varchar(5),
horario_reservado time,
preco int,
status_reserva varchar(7),
cod_anun int,
foreign key(cod_anun) references espacos (cod_anun)
);

select*from sala;

/*CREATE TABLE notificações (cod_notificacao Texto(1) PRIMARY KEY, tipo_notificacao Texto(1),
titulo_notificacao Texto(1), descricao_notificacao Texto(1), data_notificacao Texto(1),
cpf_user Texto(1), FOREIGN KEY(cpf_user) REFERENCES usuarios (cpf_user)
)*/
create table notificacoes (
data_notificacao date,
titulo_notificacao varchar(20),
descricao_notificacao varchar(20),
status_notificacao varchar(20), 
cod_notificacao int auto_increment primary key,
cpf_user char(11),
foreign key(cpf_user) references usuarios (cpf_user)
); 

select*from notificacoes;

/*CREATE TABLE artigo (data_artigo Texto(1), conteudo_do_artigo Texto(1),
titulo_do_artigo Texto(1), categoria_artigo Texto(1), cod_artigo Texto(1) PRIMARY KEY,
cpf_admin Texto(1))*/
create table artigo (
cod_artigo int auto_increment primary key,
titulo_do_artigo varchar(30),
conteudo_do_artigo varchar(255),
categoria_artigo varchar(30),
data_artigo date,
cpf_admin char(11),
foreign key(cpf_admin) references administradores (cpf_admin)
);

select*from artigo;

/*CREATE TABLE avaliacao (num_estrelas Texto(1), data_avalia Texto(1), texto_avalia Texto(1),
cod_avalia Texto(1) PRIMARY KEY, cod_anun Texto(1), FOREIGN KEY(cod_anun) REFERENCES espacos (cod_anun)
)*/
create table avaliacao (
num_estrelas varchar(5),
cod_avalia int auto_increment primary key,
data_avalia date,
texto_avalia varchar(100),
cod_anun int,
foreign key(cod_anun) references espacos(cod_anun)
);

select*from avaliacao;

/*CREATE TABLE gerencia (cpf_admin Texto(1), cpf_user Texto(1),
FOREIGN KEY(cpf_admin) REFERENCES administradores (cpf_admin),
FOREIGN KEY(cpf_user) REFERENCES usuarios (cpf_user)
)*/
create table admin_user (
cpf_admin char(11),
cpf_user char(11),
foreign key(cpf_admin) references administradores (cpf_admin),
foreign key(cpf_user) references usuarios (cpf_user)
);

select*from admin_user;

/*CREATE TABLE gerencia (cpf_admin Texto(1), cod_anun Texto(1),
FOREIGN KEY(cpf_admin) REFERENCES administradores (cpf_admin),
FOREIGN KEY(cod_anun) REFERENCES espacos (cod_anun)
)*/

create table admin_espacos (
cpf_admin char(11),
cod_anun int,
foreign key(cpf_admin) references administradores (cpf_admin),
foreign key(cod_anun) references espacos (cod_anun)
);

select*from admin_espacos;

/*CREATE TABLE aluga (
cpf_user Texto(1),
num_sala Texto(1),
FOREIGN KEY(cpf_user) REFERENCES usuarios (cpf_user),
FOREIGN KEY(cod_sala) REFERENCES sala (cod_sala)
)*/
create table aluguel (
cpf_admin char(11),
cod_sala int,
foreign key(cpf_admin) references administradores (cpf_admin),
foreign key(cod_sala) references sala (cod_sala)
);

select*from aluguel;

/*CREATE TABLE recebe (
cpf_user Texto(1),
cod_avalia Texto(1),
FOREIGN KEY(cpf_user) REFERENCES usuarios (cpf_user)/*falha: chave estrangeira*/
create table usuario_avalia (
cpf_user char(11),
cod_avalia int,
foreign key(cpf_user) references usuarios (cpf_user),
foreign key(cod_avalia) references avaliacao (cod_avalia)
);

select*from usuario_avalia;







