-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database big_bang;
use big_bang;

create table usuario (
id_usuario int primary key auto_increment,
nome varchar(100) unique not null,
senha varchar(100) not null);

insert into usuario(nome, senha) value
("julia sa", "julia2122");

select * from usuario;

create table jogo (
id_jogo int primary key auto_increment,
partida int not null,
vencedor varchar(20) not null,
cadastrado_em DATETIME DEFAULT CURRENT_TIMESTAMP(),
fk_usuario int, 
foreign key(fk_usuario) references usuario(id_usuario));

create table quiz (
id_quiz int primary key auto_increment,
pontuacao_matematica int not null,
pontuacao_serie int not null,
cadastrado_em DATETIME DEFAULT CURRENT_TIMESTAMP(),
fk_usuario int, 
foreign key(fk_usuario) references usuario(id_usuario));