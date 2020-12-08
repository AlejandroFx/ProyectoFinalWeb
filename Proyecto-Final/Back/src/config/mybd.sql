/*Tabla de Generos uwu*/
create table Genero(
id INT NOT NULL auto_increment,
genero varchar(50) NOT NULL,
primary key(id)
);
insert into Genero(genero) values ("Rock");



/*Tabla de Canciones owo*/
create table Cancion(
id INT NOT NULL auto_increment,
titulo varchar(50) NOT NULL,
artista varchar(80) NOT NULL,
año varchar(4) NOT NULL,
genero varchar(50) NOT NULL,
primary key(id)
);
insert into Cancion(titulo, artista, año, genero) values ("Livin on a prayer", "Bon Jovi", "1986", "Rock");

select * from Cancion;