# Quick Start Guide

## Step 1: Create Database

Run this SQL in phpMyAdmin or MySQL CLI:

```sql
CREATE DATABASE IF NOT EXISTS your_database_name;
USE your_database_name;

CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO events (name, description, date) VALUES
('Conference 2026', 'Annual developer conference', '2026-04-15'),
('Workshop', 'AngularJS and MySQL integration', '2026-05-20');
```

## Step 2: Configure Database Connection

Edit `db-config.php`:

```php
$servername = "localhost";      // MySQL server address
$username = "root";             // MySQL username
$password = "";                 // MySQL password
$database = "your_database_name";  // Your database name
```

## Step 3: Deploy Files

Place all files in your web server directory:
- XAMPP: `C:\xampp\htdocs\AngularJS Events\`
- WAMP: `C:\wamp\www\AngularJS Events\`
- LAMP: `/var/www/html/AngularJS Events/`

## Step 4: Run Application

1. Start Apache and MySQL
2. Open browser: `http://localhost/AngularJS Events/index.html`
3. You should see the events list loaded from database

## File Structure

```
4.AngularJS Events/
├── index.html         (Main application UI)
├── app.js            (AngularJS controller and service)
├── api.php           (Backend API - fetch/add events)
├── db-config.php     (Database configuration)
├── database.sql      (Database schema)
├── README.md         (Full documentation)
└── SETUP.md          (This file)
```

## Code Overview

### AngularJS Service (Fetches Data)
```javascript
app.service('EventService', function($http) {
    this.getEvents = function() {
        return $http.get('api.php');  // Fetches from database
    };
});
```

### PHP API (Connects to MySQL)
```php
$sql = "SELECT * FROM events";  // Query database
$result = $conn->query($sql);   // Execute query
echo json_encode($result);      // Return as JSON
```

## Common Issues

| Issue | Solution |
|-------|----------|
| Events not showing | Check MySQL connection, verify database exists |
| 404 errors | Ensure PHP files are in correct directory |
| Can't add events | Check file permissions, database user privileges |

## Next Steps

- Add edit functionality
- Add delete functionality
- Add search/filter
- Add pagination
- Add authentication

Good luck! 🚀
