-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE aquatech;

USE aquatech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    cpf char(14),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);

select * from usuario;

insert into medida values
(1, 11, 23, 1, 25, 1, '2024-02-12 12:00:00', 1),
(2, 34, 15, 2, 21, 0, '2024-04-02 00:30:00', 1),
(3, 23, 12, 0, 27, 1, '2024-07-28 14:30:00', 1),
(4, 4, 15, 2, 31, 1, '2024-04-02 00:30:00', 1),
(5, 17, 15, 4, 21, 0, '2024-04-02 00:30:00', 1),
(6, 19, 15, 2, 45, 1, '2024-04-02 00:30:00', 1),
(7, 29, 15, 6, 60, 0, '2024-04-02 00:30:00', 1),
(8, 79, 15, 8, 47, 1, '2024-04-02 00:30:00', 1),
(9, 50, 15, 10, 76, 0, '2024-04-02 00:30:00', 1),
(10, 44, 15, 3, 23, 1, '2024-04-02 00:30:00', 1),
(11, 14, 15, 1, 98, 0, '2024-04-02 00:30:00', 1),
(12, 73, 12, 0, 35, 1, '2024-07-28 14:30:00', 1);

insert into empresa values 
(2, 'Empresa 2', '11111111111111');

insert into aquario values 
(2, 'Aquario teste', 2);

insert into aquario values
(3, 'Aquario teste', 1);
