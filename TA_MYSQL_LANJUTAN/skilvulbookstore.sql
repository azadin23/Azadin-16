-- Create database --
CREATE DATABASE skilvulbookstore;

USE skilvulbookstore;

-- Create table Penerbit --
CREATE TABLE penerbit(
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nama VARCHAR(50),
	kota VARCHAR(50)
);

DESC penerbit;

-- Create table Penulis --
CREATE TABLE penulis (
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nama VARCHAR(50),
	kota VARCHAR(50)
);

DESC penulis;

-- Create Table Book --
CREATE TABLE buku (
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	ISBN VARCHAR(50),
	judul VARCHAR(50),
	idPenulis INT(10),
	idPenerbit INT(10),
	harga INT(10),
	stock INT(10),
	CONSTRAINT fk_penerbit FOREIGN KEY (idPenerbit) REFERENCES penerbit(id),
	CONSTRAINT fk_penulis FOREIGN KEY (idPenulis) REFERENCES penulis(id)
);

DESC buku;


-- insert data --
INSERT INTO penulis(nama, kota) VALUES('Carrol', 'Chicago');
INSERT INTO penulis(nama, kota) VALUES('Azadin', 'Medan');

INSERT INTO penerbit(nama, kota) VALUES('Bagas', 'Bandung');
INSERT INTO penerbit(nama, kota) VALUES('Jarvis', 'California');

INSERT INTO buku(ISBN, judul, idPenulis, idPenerbit, harga, stock)
VALUES ('11S18065', 'Bright Days', 2, 2, 100000, 50);
INSERT INTO buku(ISBN, judul, idPenulis, idPenerbit, harga, stock)
VALUES ('11S18066', 'Silent', 2, 1, 150000, 10);
INSERT INTO buku(ISBN, judul, idPenulis, idPenerbit, harga, stock)
VALUES ('111xx1112', 'Girl With All The Gift', 1, 1, 350000, 120);


-- INNER JOIN buku & penerbit
SELECT * 
FROM buku
INNER JOIN penerbit
ON buku.idPenerbit = penerbit.id;

-- LEFT JOIN buku & penerbit
SELECT * 
FROM bukus
LEFT JOIN penerbit
ON buku.idPenerbit = penerbit.id;

-- RIGHT JOIN buku & penerbit
SELECT * 
FROM buku
RIGHT JOIN penerbit
ON buku.idPenerbit = penerbit.id;

-- Cek max harga pada table book --
SELECT MAX(harga)
FROM buku;

-- Cek min harga pada table book --
SELECT MIN(harga)
FROM buku;

-- Count buku harga < 100k pada table book --
SELECT COUNT(*) AS JlhBukuDibawah100k 
FROM buku
WHERE harga < 100000;

-- Count buku harga < 200k pada table book --
SELECT COUNT(*) AS JlhBukuDibawah200k 
FROM buku
WHERE harga < 200000; 