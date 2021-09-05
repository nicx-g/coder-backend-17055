create database ecommerce;
use ecommerce;
create table productos (
id int unsigned auto_increment primary key not null ,
nombre varchar(30) not null,
stock int unsigned not null , 
categoria varchar(30) not null
); 
insert into productos(nombre, categoria, stock) values
("Fideos", "Harina", 20),
("Leche", "Lácteos", 30),
("Crema", "Lácteos", 15);
select * from productos;
delete from productos where id=1;
update productos set stock=45 where id=2;
select * from productos;