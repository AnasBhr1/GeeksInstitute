-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'fr-FR'
--     LC_CTYPE = 'fr-FR'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


-- CREATE TABLE items(
--  id serial PRIMARY KEY,
--  name VARCHAR(255),
--  price INTEGER 
-- );

-- CREATE TABLE customers(
--  id serial PRIMARY KEY,
--  first_name VARCHAR(255),
--  last_name VARCHAR(255)
-- );


-- INSERT INTO "items" (name, price) VALUES ('Small Desk', 100), ('Large desk', 300), ('Fan', 80);
-- INSERT INTO "customers" (first_name, last_name) VALUES ('Greg', 'Jones'), ('Sandra', 'Jones'), ('Scott', 'Scott'), ('Trevor', 'Green'), ('Melanie', 'Johnson');

-- select * from items
-- select * from items where price > 80
-- select * from items where price <= 300
-- select * from customers where last_name = 'Smith'
-- select * from customers where last_name = 'Jones'
-- select * from customers where first_name != 'Scott'




