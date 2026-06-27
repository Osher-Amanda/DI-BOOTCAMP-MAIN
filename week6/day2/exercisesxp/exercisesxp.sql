-- ==================================
-- EXERCISE 1
-- ITEMS AND CUSTOMERS
-- ==================================

-- All items ordered by price (lowest to highest)
SELECT *
FROM items
ORDER BY price ASC;

-- Items with price above 80 (80 included)
-- ordered by price (highest to lowest)
SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;

-- First 3 customers in alphabetical order
-- Exclude the id column
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

-- All last names in reverse alphabetical order
SELECT last_name
FROM customers
ORDER BY last_name DESC;

-- ==================================
-- EXERCISE 2
-- DV DRENTAL DATABASE
-- ==================================

-- All columns from customer
SELECT *
FROM customer;

-- Customer names with alias
SELECT
first_name,
last_name,
first_name || ' ' || last_name AS full_name
FROM customer;

-- All unique create dates
SELECT DISTINCT create_date
FROM customer;

-- All customer details descending by first name
SELECT *
FROM customer
ORDER BY first_name DESC;

-- Film details ordered by rental rate
SELECT
film_id,
title,
description,
release_year,
rental_rate
FROM film
ORDER BY rental_rate ASC;

-- Texas customers
SELECT
address,
phone
FROM address
WHERE district = 'Texas';

-- Movie ID 15 or 150
SELECT *
FROM film
WHERE film_id IN (15,150);

-- Favorite movie (replace with your own movie)
SELECT
film_id,
title,
description,
length,
rental_rate
FROM film
WHERE title = 'Obsessed';

-- Movies beginning with first two letters
SELECT
film_id,
title,
description,
length,
rental_rate
FROM film
WHERE title LIKE 'Ob%';

-- 10 cheapest movies
SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- Next 10 cheapest movies
SELECT *
FROM film
ORDER BY rental_rate ASC
OFFSET 10
LIMIT 10;

-- Customer payments
SELECT
customer.first_name,
customer.last_name,
payment.amount,
payment.payment_date
FROM customer
JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY payment.payment_id;

-- Movies not in inventory
SELECT *
FROM film
WHERE film_id NOT IN
(
SELECT film_id
FROM inventory
);

-- Cities and countries
SELECT
city.city,
country.country
FROM city
JOIN country
ON city.country_id = country.country_id;

-- BONUS
SELECT
customer.customer_id,
customer.first_name,
customer.last_name,
payment.amount,
payment.payment_date
FROM customer
JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id;

