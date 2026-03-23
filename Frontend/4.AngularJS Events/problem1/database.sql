-- Create Database
CREATE DATABASE IF NOT EXISTS your_database_name;
USE your_database_name;

-- Create Events Table
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Data
INSERT INTO events (name, description, date) VALUES
('Conference 2026', 'Annual developer conference', '2026-04-15'),
('Workshop', 'AngularJS and MySQL integration', '2026-05-20'),
('Meetup', 'Tech community meetup', '2026-06-10');
