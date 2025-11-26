# User Management System

A simple web-based user management system with CRUD operations and responsive design.

## Tech Stack

### Frontend
- **HTML5** - Structure and markup
- **CSS3** - Styling with gradients, animations, and responsive design
- **JavaScript (ES6+)** - Client-side functionality and API calls
- **Fetch API** - HTTP requests to backend

### Backend
**Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **Middleware**: 
  - CORS (Cross-Origin Resource Sharing)
  - Body Parser / Express JSON parser
- **Database Driver**: mysql

## Features

- ✅ Add new users
- ✅ View all users with serial numbers
- ✅ Edit/Update user information
- ✅ Delete users
- ✅ Responsive design (mobile, tablet, desktop)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| POST | `/users` | Create new user |
| GET | `/users/:id` | Get user by ID |
| PUT | `/users/:id` | Update user by ID |
| DELETE | `/users/:id` | Delete user by ID |