-- show all databases --
SHOW DATABASES;

-- create a database --
CREATE DATABASE bookstore;

-- use a database --
USE bookstore;

-- show all tables in db --
SHOW TABLES;

-- create table in database --
CREATE TABLE books (
	id INT AUTO_INCREMENT PRIMARY KEY,
	author1 VARCHAR(100) NOT NULL,
	author2 VARCHAR(100),
	author3 VARCHAR(100),
	title VARCHAR(100),
	DESCRIPTION TINYTEXT,
	place_sell VARCHAR(3),
	stock INT DEFAULT 0,
	creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- alter table with some change in column --
ALTER TABLE books 
	ADD COLUMN (
			price INT DEFAULT 0,
			STATUS ENUM('available', 'out of stock', 'limited')
	),
	DROP COLUMN place_sell;

DESC books;

-- select first data --
INSERT INTO books(
	author1,
	title,
	stock,
	price,
	STATUS
) VALUES(
	'Azadin Azhar Purba',
	'How To Sit Well',
	50,
	100000,
	1);
	
-- select second data --
INSERT INTO books(
	author1,
	author2,
	title,
	stock,
	price,
	STATUS
) VALUES(
	'Ronald',
	'Bright Day',
	'The best way to know how to enjoy our day',
	20,
	120000,
	3);
	
-- select third data --
INSERT INTO books(
	author1,
	title,
	DESCRIPTION,
	stock,
	price,
	STATUS
) VALUES(
	'Stefany',
	'The Art of Starring',
	'The only way to know what truly life looks like',
	1100,
	325000,
	2);
	
-- select all row --
SELECT * FROM books;

-- select row with alias --
SELECT 
	id AS ID, 
	author1 AS A1,
	author2 AS A2, 
	author3 AS A3 
FROM books;

-- select row with unique id --
SELECT * FROM books
WHERE 
	id = 2;
	
-- select with and operator --
SELECT * FROM books
WHERE 
	stock > 0 AND price <200000;
	
-- select with or operator --
SELECT * FROM books
WHERE 
	stock < 10 OR price > 300000;

-- select with not operator --
SELECT * FROM books
WHERE NOT
	stock > 100;
	
-- select with asc order --
SELECT * FROM books 
ORDER BY id ASC;

-- select with limit 2 row --
SELECT * FROM books
LIMIT 2;


-- Delete 'out of stock' books--
DELETE FROM books 
WHERE STATUS = 2;

SELECT * FROM books;

