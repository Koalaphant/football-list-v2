CREATE DATABASE fotlist;

-- Table to store user information
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    first_name VARCHAR(255),
    hashed_password VARCHAR(255) NOT NULL
);

-- Table to store the football list for the current week
CREATE TABLE football_list (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE,
    first_name VARCHAR(255) NOT NULL
);

-- Table to track the total number of times each player has played
CREATE TABLE played_count (
    user_email VARCHAR(255) PRIMARY KEY REFERENCES users(email) ON DELETE CASCADE,
    count INT DEFAULT 0
);