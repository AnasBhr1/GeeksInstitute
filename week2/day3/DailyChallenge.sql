--Part 1
--1
-- CREATE TABLE customer (
--     id SERIAL PRIMARY KEY,  
--     first_name VARCHAR(50) NOT NULL,  
--     last_name VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE customer_profile (
--     id SERIAL PRIMARY KEY, 
--     isLoggedIn BOOLEAN DEFAULT FALSE, 
--     customer_id INT UNIQUE REFERENCES customer(id) ON DELETE CASCADE 
-- );

--2
-- INSERT INTO customer (first_name, last_name) VALUES 
-- ('John', 'Doe'), 
-- ('Jerome', 'Lalu'), 
-- ('Lea', 'Rive');

--3
-- INSERT INTO customer_profile (isLoggedIn, customer_id) 
-- VALUES 
-- (TRUE, (SELECT id FROM customer WHERE first_name = 'John')), 
-- (FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome'));

--4
-- SELECT c.first_name 
-- FROM customer c
-- JOIN customer_profile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = TRUE;

-- SELECT c.first_name, coalesce(cp.isloggedIn, false) AS isLoggedIn
-- FROM customer c
-- LEFt JOIN customerProfile cp ON c.id = cp.customer_id;

-- SELECT count(*) as not_logged_in FROM customer c
-- LEFT JOIN customerProfile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = false


--Part 2
--1
-- CREATE TABLE Book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     author VARCHAR(100) NOT NULL
-- );

--2
-- INSERT INTO Book (title, author) VALUES 
-- ('Alice In Wonderland', 'Lewis Carroll'), 
-- ('Harry Potter', 'J.K Rowling'), 
-- ('To Kill a Mockingbird', 'Harper Lee');


--3
-- CREATE TABLE Student (
--     student_id SERIAL PRIMARY KEY,  
--     name VARCHAR(50) NOT NULL UNIQUE,  
--     age INT CHECK (age <= 15)  
-- );

--4
-- INSERT INTO Student (name, age) VALUES 
-- ('John', 12), 
-- ('Lera', 11), 
-- ('Patrick', 10), 
-- ('Bob', 14);

--5
-- CREATE TABLE Library (
--     book_fk_id INT REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE, 
--     student_fk_id INT REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE, 
--     borrowed_date DATE NOT NULL,  
--     PRIMARY KEY (book_fk_id, student_fk_id)
-- );

--6
-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) 
-- VALUES 
-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
--  (SELECT student_id FROM Student WHERE name = 'John'), 
--  '2022-02-15'),

-- ((SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'), 
--  (SELECT student_id FROM Student WHERE name = 'Bob'), 
--  '2021-03-03'),

-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
--  (SELECT student_id FROM Student WHERE name = 'Lera'), 
--  '2021-05-23'),

-- ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), 
--  (SELECT student_id FROM Student WHERE name = 'Bob'), 
--  '2021-08-12');

--7
-- SELECT * FROM Library;

-- SELECT s.name, b.title 
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id;

-- SELECT AVG(s.age) AS average_age
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id
-- WHERE b.title = 'Alice In Wonderland';

-- DELETE FROM Student WHERE name = 'Bob';
-- We added ON DELETE CASCADE to ensure that when a student is deleted, all their borrowed books (from the junction table) will also be deleted. This includes deleting the record of Lera borrowing a book from the Library table.









