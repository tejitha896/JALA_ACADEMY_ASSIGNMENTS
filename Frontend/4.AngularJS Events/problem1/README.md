# AngularJS MySQL Events Management System

This project demonstrates how to fetch and display data from a MySQL database using AngularJS.

## Project Files

- **index.html** - Main HTML file with AngularJS application UI
- **app.js** - AngularJS application with controller and service
- **api.php** - Backend API to handle database operations
- **db-config.php** - Database connection configuration
- **database.sql** - SQL script to create the database and table

## Setup Instructions

### 1. Database Setup

1. Open phpMyAdmin or MySQL command line
2. Execute the SQL commands from `database.sql`:
   - Create database: `your_database_name`
   - Create `events` table with columns: id, name, description, date, created_at

Or simply run:
```bash
mysql -u root -p < database.sql
```

### 2. Update Database Configuration

Edit `db-config.php` and update:
```php
$servername = "localhost";  // Your MySQL server
$username = "root";          // Your MySQL username
$password = "";              // Your MySQL password
$database = "your_database_name";  // Your database name
```

### 3. Deploy Files

1. Place all PHP files (`api.php`, `db-config.php`) in your web server directory (e.g., `htdocs` for XAMPP or `www` for WAMP)
2. Place `index.html` and `app.js` in the same directory
3. Make sure your web server (Apache/Nginx) is running

### 4. Access the Application

Open your browser and navigate to:
```
http://localhost/your_project_folder/index.html
```

## How It Works

### Frontend (AngularJS)

1. **EventService** - Service that handles HTTP requests to the backend
   - `getEvents()` - Fetches all events from the database
   - `addEvent()` - Adds a new event to the database

2. **EventController** - Main controller that manages the UI
   - Automatically loads events on page load
   - Displays events in a formatted list
   - Allows adding new events through a form
   - Includes refresh functionality

### Backend (PHP)

1. **api.php** - REST API endpoint
   - **GET request**: Returns all events from the database as JSON
   - **POST request**: Inserts a new event into the database

2. **db-config.php** - Database connection
   - Establishes MySQL connection
   - Sets JSON header for API responses

## Database Schema

```sql
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Get All Events
```
GET /api.php
Response: JSON array of events
```

### Add New Event
```
POST /api.php
Body: {
    "name": "Event Name",
    "description": "Event description",
    "date": "2026-04-15"
}
Response: {
    "status": "success",
    "message": "Event created successfully"
}
```

## Features

✅ Fetch data from MySQL database  
✅ Display events in a responsive UI  
✅ Add new events to the database  
✅ Real-time data binding with AngularJS  
✅ Error handling and loading indicators  
✅ Refresh functionality  
✅ Responsive design with modern styling  

## Requirements

- Apache/Nginx web server
- PHP 5.6 or higher
- MySQL 5.5 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Troubleshooting

**Events not loading:**
- Check database connection in `db-config.php`
- Ensure MySQL server is running
- Check browser console for errors (F12)

**Can't add events:**
- Verify database table exists
- Check user permissions in database
- Ensure database name is correct

**CORS errors:**
- If accessing from different domain, add CORS headers to `api.php`

## Enhancement Ideas

- Add authentication/login
- Edit and delete events functionality
- Search and filter events
- Event categories
- Export to CSV
- Pagination
- Validation on backend

## License

Free to use and modify.
