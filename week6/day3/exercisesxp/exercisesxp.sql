-- 
-- DVD RENTAL
-- 

--
-- EXERCISE 1
-- 

-- Get all languages

SELECT *
FROM language;

-- Get all films with their languages

SELECT
film.title,
film.description,
language.name AS language_name
FROM film
INNER JOIN language
ON film.language_id = language.language_id;

-- Get all languages, even if there are no films

SELECT
film.title,
film.description,
language.name AS language_name
FROM language
LEFT JOIN film
ON language.language_id = film.language_id;

-- Create new_film table

DROP TABLE IF EXISTS customer_review;
DROP TABLE IF EXISTS new_film;

CREATE TABLE new_film (
id SERIAL PRIMARY KEY,
name VARCHAR(100)
);

-- Add new films

INSERT INTO new_film (name)
VALUES
('The Matrix'),
('Titanic'),
('Avatar');

-- Create customer_review table

CREATE TABLE customer_review (
review_id SERIAL PRIMARY KEY,
film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
language_id INT REFERENCES language(language_id),
title VARCHAR(100),
score INT CHECK (score BETWEEN 1 AND 10),
review_text TEXT,
last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add two movie reviews

INSERT INTO customer_review
(film_id, language_id, title, score, review_text)
VALUES
(
(SELECT id FROM new_film WHERE name = 'The Matrix'),
1,
'Excellent',
10,
'Amazing movie.'
),
(
(SELECT id FROM new_film WHERE name = 'Titanic'),
1,
'Very Good',
9,
'Classic film.'
);

-- Delete a film with a review

DELETE FROM new_film
WHERE name = 'The Matrix';

-- Check customer_review table

SELECT *
FROM customer_review;

-- 
-- EXERCISE 2
-- 

-- Update language of some films

UPDATE film
SET language_id = 2
WHERE film_id = 1;

UPDATE film
SET language_id = 3
WHERE film_id = 2;

-- Display foreign keys of customer table

SELECT
tc.constraint_name,
kcu.column_name,
ccu.table_name AS foreign_table,
ccu.column_name AS foreign_column
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu
ON tc.constraint_name = ccu.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
AND tc.table_name = 'customer';

-- Drop customer_review table

DROP TABLE customer_review;

-- Count outstanding rentals

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

-- Find the 30 most expensive outstanding movies

SELECT
film.title,
film.replacement_cost
FROM rental
JOIN inventory
ON rental.inventory_id = inventory.inventory_id
JOIN film
ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;

-- First movie

SELECT film.title
FROM film
JOIN film_actor
ON film.film_id = film_actor.film_id
JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE film.description ILIKE '%sumo%'
AND actor.first_name = 'PENELOPE'
AND actor.last_name = 'MONROE';

-- Second movie

SELECT title
FROM film
WHERE length < 60
AND rating = 'R';

-- Third movie

SELECT DISTINCT film.title
FROM customer
JOIN rental
ON customer.customer_id = rental.customer_id
JOIN payment
ON rental.rental_id = payment.rental_id
JOIN inventory
ON rental.inventory_id = inventory.inventory_id
JOIN film
ON inventory.film_id = film.film_id
WHERE customer.first_name = 'MATTHEW'
AND customer.last_name = 'MAHAN'
AND payment.amount > 4.00
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- Fourth movie

SELECT DISTINCT film.title
FROM customer
JOIN rental
ON customer.customer_id = rental.customer_id
JOIN inventory
ON rental.inventory_id = inventory.inventory_id
JOIN film
ON inventory.film_id = film.film_id
WHERE customer.first_name = 'MATTHEW'
AND customer.last_name = 'MAHAN'
AND (
film.title ILIKE '%boat%'
OR film.description ILIKE '%boat%'
)
ORDER BY film.replacement_cost DESC;
