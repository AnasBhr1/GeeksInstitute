--1
-- select name from language;

--2
-- SELECT title,description, name
-- FROM film 
-- JOIN language l ON film.language_id = l.language_id;

--3
-- select f.title,f.description,l.name
-- from language l
-- left join film f on f.language_id = l.language_id;

--4
-- CREATE TABLE new_film (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL
-- );

-- INSERT INTO new_film (name) VALUES 
-- ('Inception'), 
-- ('Interstellar'), 
-- ('The Matrix');

--5
-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
--     language_id INT REFERENCES language(language_id),
--     title VARCHAR(255) NOT NULL,
--     score INT CHECK (score BETWEEN 1 AND 10),
--     review_text TEXT,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

--6
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES 
-- (1, 1, 'Mind-blowing!', 10, 'Inception is a masterpiece of storytelling and visuals.'),
-- (2, 1, 'A Sci-Fi Wonder', 9, 'Interstellar takes you on an emotional and scientific journey.');

--7
-- DELETE FROM new_film WHERE id = 1;
-- when we delete a film that has a review , the customer_review reviews will be deleted as well


