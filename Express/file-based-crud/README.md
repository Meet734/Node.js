# File-Based CRUD Application

This is a Node.js and Express-based CRUD application that manages items using a file-based storage system (`data.json`). The application provides APIs for creating, reading, updating, and deleting items, along with basic validation and error handling.

## Features

- **CRUD Operations**: Add, retrieve, update, and delete items.
- **File-Based Storage**: Data is stored in a JSON file (`data.json`).
- **Validation**: Ensures item data is valid before processing.
- **Soft Deletion**: Items are marked as deleted instead of being permanently removed.
- **Error Handling**: Centralized error handling with custom error classes.
- **Email Notifications**: Sends an email when a new item is added (using Nodemailer).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Meet734/Node.js.git
   cd Express/file-based-crud
    ```

2. Install dependencies:
```bash 
    npm install
    ```
    
3. Start the server:
   ```bash
    npm start
    ```
4. Access the application at http://localhost:3000.

---
## Brief Explanation of project: 
### API Endpoints
```
Item Routes (/api/data)

GET /: Retrieve all items.
GET /:id: Retrieve a specific item by ID.
POST /: Add a new item.
PUT /:id: Update an existing item by ID.
DELETE /:id: Soft delete an item by ID.
```
### Public Routes (/public)
```
GET /:fileName: Serve static files from the public directory.
```
### Project Structure
```
controllers/: Contains route handlers for CRUD operations.
routes/: Defines API routes.
utils/: Utility functions for validation, file operations, and email notifications.
models/: Defines the Item class.
views/: EJS templates for rendering views.
public/: Static files (HTML, CSS, JS).
```
### Dependencies
```
express: Web framework.
uuid: For generating unique IDs.
nodemailer: For sending emails.
ejs: Template engine.
```

> for Postman document:
```
https://documenter.getpostman.com/view/42717307/2sB2cPi4yt#21cd042d-8580-4fd4-ba02-718433d20326
```
