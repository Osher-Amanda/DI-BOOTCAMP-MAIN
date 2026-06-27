-- =========================
-- WEEK 6 DAY 1 - DAILY CHALLENGE
-- ACTORS TABLE
-- =========================

-- 1. Count how many actors are in the table
SELECT COUNT(*) 
FROM actors;


-- 2. Try to add a new actor with blank fields
INSERT INTO actors (first_name, last_name)
VALUES ('', '');