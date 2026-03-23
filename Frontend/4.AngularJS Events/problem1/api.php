<?php
// Include database configuration
include 'db-config.php';

// Get request method
$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method == 'GET') {
    // Get all events from database table
    $sql = "SELECT * FROM events";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $events = array();
        while($row = $result->fetch_assoc()) {
            $events[] = $row;
        }
        echo json_encode($events);
    } else {
        echo json_encode(array("message" => "No events found"));
    }
} 
else if ($request_method == 'POST') {
    // Insert new event into database
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = $conn->real_escape_string($data['name']);
    $description = $conn->real_escape_string($data['description']);
    $date = $conn->real_escape_string($data['date']);
    
    $sql = "INSERT INTO events (name, description, date) VALUES ('$name', '$description', '$date')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("status" => "success", "message" => "Event created successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error: " . $conn->error));
    }
}

$conn->close();
?>
