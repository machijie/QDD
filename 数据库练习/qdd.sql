SET NAMES UTF8;
DROP DATABASE IF EXISTS qdd;
CREATE DATABASE qdd CHARSET=UTF8;
USE qdd;

CREATE TABLE lenovo(
id INT PRIMARY KEY AUTO_INCREMENT,
inch INT,
ram VARCHAR(10),
rom VARCHAR(10),
cpu VARCHAR(10),
title VARCHAR(50),
price FLOAT(10,2),
detail VARCHAR(500),
num INT,
logo VARCHAR(20),
mp VARCHAR(50),
xl INT
);

INSERT INTO lenovo VALUES(NULL,14,'8G','128G','i5','联想(Lenovo)小新Air14性能版轻薄本 ',3500.00,'英特尔酷睿i5 全面屏学生独显笔记本电脑(i5 8G 128G MX350 高色域)银',500,'联想','img/product/mp/lx0001.jpg',30);
INSERT INTO lenovo VALUES(NULL,15,'12G','128G','i3','联想(Lenovo)小新Air14性能版轻薄本 ',3600.00,'英特尔酷睿i3 全面屏学生独显笔记本电脑(i3 12G 128G MX350 低色域)银',500,'联想','img/product/mp/lx0002.jpg',30);
INSERT INTO lenovo VALUES(NULL,14,'16G','500G','i3','联想(Lenovo)小新Air14性能版轻薄本 ',3700.00,'英特尔酷睿i3 全面屏学生独显笔记本电脑(i3 16G 500G MX500 高色域)银',500,'联想','img/product/mp/lx0003.jpg',30);
INSERT INTO lenovo VALUES(NULL,17,'12G','500G','i7','联想(Lenovo)小新Air14性能版轻薄本 ',3800.00,'英特尔酷睿i7 全面屏学生独显笔记本电脑(i7 12G 500G MX300 浅色域)银',500,'联想','img/product/mp/lx0004.jpg',30);
INSERT INTO lenovo VALUES(NULL,17,'8G','500G','i5','联想(Lenovo)小新Air14性能版轻薄本 ',3900.00,'英特尔酷睿i5 全面屏学生独显笔记本电脑(i5 8G 500G MX450 高色域)银',500,'联想','img/product/mp/lx0005.jpg',30);
INSERT INTO lenovo VALUES(NULL,15,'8G','1T','i3','联想(Lenovo)小新Air14性能版轻薄本 ',4000.00,'英特尔酷睿i3 全面屏学生独显笔记本电脑(i3 8G 1T MX350 低色域)银',500,'联想','img/product/mp/lx0006.jpg',30);
INSERT INTO lenovo VALUES(NULL,14,'16G','1T','i7','联想(Lenovo)小新Air14性能版轻薄本 ',4100.00,'英特尔酷睿i7 全面屏学生独显笔记本电脑(i7 16G 1T MX300 高色域)银',500,'联想','img/product/mp/lx0007.jpg',30);
INSERT INTO lenovo VALUES(NULL,15,'16G','1T','i3','联想(Lenovo)小新Air14性能版轻薄本 ',4200.00,'英特尔酷睿i3 全面屏学生独显笔记本电脑(i3 16G 1T MX700 中色域)银',500,'联想','img/product/mp/lx0008.jpg',30);
INSERT INTO lenovo VALUES(NULL,15,'8G','128G','i5','联想(Lenovo)小新Air14性能版轻薄本 ',4300.00,'英特尔酷睿i5 全面屏学生独显笔记本电脑(i5 8G 128G MX350 浅色域)银',500,'联想','img/product/mp/lx0009.jpg',30);
INSERT INTO lenovo VALUES(NULL,17,'8G','512G','i7','联想(Lenovo)小新Air14性能版轻薄本 ',4500.00,'英特尔酷睿i7 全面屏学生独显笔记本电脑(i7 8G 512G MX500 高色域)银',500,'联想','img/product/mp/lx00010.jpg',30);