--1
-- UPDATE film SET language_id = 2 WHERE film_id= 1
-- UPDATE film SET language_id = 1 WHERE film_id= 2;

--2
-- the store_id refers to the store table
-- the address_id refers to the address table
-- Before inserting a new customer, we must ensure that the referenced values already exist in the related tables

--3
--DROP TABLE customer_review;
--Dropping the customer_review table is an easy step, but we should check for dependencies first

--4
-- SELECT COUNT(*) AS outstanding_rentals  
-- FROM rental  
-- WHERE return_date IS NULL;

--5
-- SELECT f.film_id, f.title, f.rental_rate, r.rental_date  
-- FROM rental r  
-- JOIN inventory i ON r.inventory_id = i.inventory_id  
-- JOIN film f ON i.film_id = f.film_id  
-- WHERE r.return_date IS NULL  
-- ORDER BY f.rental_rate DESC  
-- LIMIT 30;

--6,1
-- SELECT f.film_id, f.title, f.description  
-- FROM film f  
-- JOIN film_actor fa ON f.film_id = fa.film_id  
-- JOIN actor a ON fa.actor_id = a.actor_id  
-- WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'  
-- AND f.description ILIKE '%sumo%';

--6,2
-- SELECT f.film_id, f.title, f.description  
-- FROM film f  
-- JOIN film_category fc ON f.film_id = fc.film_id  
-- JOIN category c ON fc.category_id = c.category_id  
-- WHERE c.name = 'Documentary'  
-- AND f.length < 60  
-- AND f.rating = 'R';

--6.3
-- SELECT f.film_id, f.title, p.amount, r.return_date  
-- FROM rental r  
-- JOIN payment p ON r.rental_id = p.rental_id  
-- JOIN inventory i ON r.inventory_id = i.inventory_id  
-- JOIN film f ON i.film_id = f.film_id  
-- JOIN customer c ON r.customer_id = c.customer_id  
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'  
-- AND p.amount > 4.00  
-- AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

--6.4
-- SELECT f.film_id, f.title, f.description, f.replacement_cost  
-- FROM film f  
-- JOIN inventory i ON f.film_id = i.film_id  
-- JOIN rental r ON i.inventory_id = r.inventory_id  
-- JOIN customer c ON r.customer_id = c.customer_id  
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'  
-- AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')  
-- ORDER BY f.replacement_cost DESC  
-- LIMIT 1;




