-- drop database FavStyle;

create database FavStyle;

use FavStyle;

create table Estilo (
    idEstilo int primary key auto_increment,
    nome varchar(45) not null, 
    descricao varchar(45) not null,
    foto varchar(120) not null
);

create table Usuario (
    idUsuario int primary key auto_increment,
    nome varchar(26) not null,
    dtNasc date not null,
    email varchar(120) not null,
    senha varchar(20) not null,
	foto varchar(1200),
    dtCadastro timestamp not null default current_timestamp,
     fkEstilo int,
    constraint fkEstiloUsuario foreign key (fkEstilo) 
        references Estilo(idEstilo)
);

select idUsuario, nome, dtNasc, email,senha, foto, dtCadastro, fkEstilo from Usuario;

select idUsuario, nome, dtNasc, email,senha, foto, dtCadastro, fkEstilo from Usuario
    WHERE email = 'kevelly@gmail.com' AND senha = '1234567';
    
create table Postagem (
    idPostagem int primary key auto_increment,
    fkUsuario int,
    foreign key (fkUsuario) references Usuario(idUsuario),
    titulo varchar(40), 
    descricao varchar(250),
    foto varchar(1200),
	dtPostagem timestamp not null default current_timestamp
);
-- alter table postagem modify column descricao varchar(250);
-- alter table Postagem add column dtPostagem timestamp not null default current_timestamp;

create table Curtida (
    fkUsuario int,
    fkPostagem int,
	foreign key (fkUsuario) references Usuario(idUsuario),
	foreign key (fkPostagem) references Postagem(idPostagem),
    primary key (fkUsuario, fkPostagem),
    dtCurtida timestamp not null default current_timestamp
);

INSERT INTO `FavStyle`.`estilo` (`idEstilo`, `nome`, `descricao`, `foto`) VALUES ('1', 'aaaaa', 'aaaaaaaaaaaaaa', 'aaaa');

select * from estilo;
select * from usuario;
select * from postagem;
select * from Comentario;

select nome, email, u.foto, titulo, p.foto, p.descricao, c.qtd_curtida from Curtida as c
	join Usuario as u
		on fkUsuario = idUsuario
	join Postagem as p
		on fkPostagem = idPostagem;
        
	

