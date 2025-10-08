-- Create a new database (run this once)
CREATE DATABASE IF NOT EXISTS shinobi_strength;

-- Use that database
USE shinobi_strength;

-- Create a table for users who sign up
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL UNIQUE,
  password VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Describe users;
