-- ==========================================
-- Week 6 Day 3 - Daily Challenge
-- Table Relationships and JOINS
-- ==========================================

-- ==========================================
-- PART I
-- One-to-One Relationship
-- ==========================================

DROP TABLE IF EXISTS CustomerProfile;
DROP TABLE IF EXISTS Customer;

CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE,
    FOREIGN KEY (customer_id)
    REFERENCES Customer(id)
);

-- Insert customers

INSERT INTO Customer (first_name, last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert customer profiles using subqueries

INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES
(
    TRUE,
    (SELECT id FROM Customer WHERE first_name = 'John')
),
(
    FALSE,
    (SELECT id FROM Customer WHERE first_name = 'Jerome')
);

-- Display the first_name of the logged in customers

SELECT c.first_name
FROM Customer c
INNER JOIN CustomerProfile cp
ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

-- Display all customers and their login status

SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp
ON c.id = cp.customer_id;

-- Display the number of customers that are not logged in

SELECT COUNT(*)
FROM Customer c
LEFT JOIN CustomerProfile cp
ON c.id = cp.customer_id
WHERE cp.isLoggedIn = FALSE
OR cp.isLoggedIn IS NULL;


-- ==========================================
-- PART II
-- Many-to-Many Relationship
-- ==========================================

DROP TABLE IF EXISTS Library;
DROP TABLE IF EXISTS Student;
DROP TABLE IF EXISTS Book;

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

INSERT INTO Book (title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

INSERT INTO Student (name, age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,

    PRIMARY KEY (book_fk_id, student_fk_id),

    FOREIGN KEY (book_fk_id)
    REFERENCES Book(book_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

    FOREIGN KEY (student_fk_id)
    REFERENCES Student(student_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- Insert borrowing records using subqueries

INSERT INTO Library
VALUES
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
),
(
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
),
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
),
(
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);

-- Display all columns from the junction table

SELECT *
FROM Library;

-- Display student names and borrowed books

SELECT s.name, b.title
FROM Library l
INNER JOIN Student s
ON l.student_fk_id = s.student_id
INNER JOIN Book b
ON l.book_fk_id = b.book_id;

-- Display the average age of students
-- who borrowed Alice In Wonderland

SELECT AVG(s.age)
FROM Library l
INNER JOIN Student s
ON l.student_fk_id = s.student_id
INNER JOIN Book b
ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student

DELETE FROM Student
WHERE name = 'John';

-- Check the junction table after deletion

SELECT *
FROM Library;

-- Because of ON DELETE CASCADE,
-- John's borrowing record is removed automatically.