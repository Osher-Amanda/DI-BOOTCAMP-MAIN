DROP TABLE IF EXISTS FirstTab;
DROP TABLE IF EXISTS SecondTab;

-- Create the tables

CREATE TABLE FirstTab (
    id INTEGER,
    name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id INTEGER
);

INSERT INTO SecondTab VALUES
(5),
(NULL);

SELECT * FROM SecondTab;

-- ==========================================
-- Q1
-- Prediction: 0
-- The subquery returns NULL, so NOT IN (NULL)
-- matches no rows.
-- ==========================================

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NULL
);

-- Actual Output: 0


-- ==========================================
-- Q2
-- Prediction: 2
-- The subquery returns 5.
-- ids 6 and 7 are counted.
-- ==========================================

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id = 5
);

-- Actual Output: 2


-- ==========================================
-- Q3
-- Prediction: 0
-- The subquery returns 5 and NULL.
-- NOT IN with NULL returns no matching rows.
-- ==========================================

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
);

-- Actual Output: 0


-- ==========================================
-- Q4
-- Prediction: 2
-- The subquery returns only 5.
-- ids 6 and 7 are counted.
-- ==========================================

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NOT NULL
);

-- Actual Output: 2


-- Final Answers
-- Q1: 0
-- Q2: 2
-- Q3: 0
-- Q4: 2