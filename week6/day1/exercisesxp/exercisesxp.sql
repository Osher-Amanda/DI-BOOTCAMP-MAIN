-- =========================
-- CREATE TABLES
-- =========================

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INTEGER
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100)
);

-- =========================
-- INSERT ITEMS
-- =========================

INSERT INTO items (name, price)
VALUES 
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

-- =========================
-- INSERT CUSTOMERS
-- =========================

INSERT INTO customers (first_name, last_name)
VALUES 
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

-- =========================
-- RETRIEVE DATA
-- =========================

-- 1. All items
SELECT * FROM items;

-- 2. Items with price above 80 (80 not included)
SELECT * FROM items
WHERE price > 80;

-- 3. Items with price below 300 (300 included)
SELECT * FROM items
WHERE price <= 300;

-- 4. Customers with last name 'Smith'
SELECT * FROM customers
WHERE last_name = 'Smith';

-- 5. Customers with last name 'Jones'
SELECT * FROM customers
WHERE last_name = 'Jones';

-- 6. Customers whose first name is NOT 'Scott'
SELECT * FROM customers
WHERE first_name != 'Scott';