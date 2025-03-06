# Express.js Assignment

## Overview
This is an Express.js project demonstrating fundamental concepts such as routing, middleware, controllers, and RESTful API implementation. The project includes user and product routes, custom middleware for logging, error handling, and environment variable configuration using dotenv.

## Features
- Express.js setup with RESTful API structure
- User and product routes with CRUD operations (GET, POST, PUT, DELETE)
- Custom middleware for request logging
- Global error handling middleware
- Environment variable management using dotenv
- Nodemon for automatic server restart during development

## Project Structure
```
express-assignment/
│-- routes/
│    ├── userRoutes.js
│    ├── productRoutes.js
│-- middleware/
│    ├── logger.js
│-- controllers/
│    ├── userController.js
│    ├── productController.js
│-- index.js
│-- package.json
│-- README.md
│-- .env
```

## Installation
### Prerequisites
Ensure you have **Node.js** installed. You can check by running:
```sh
node -v
```
If not installed, download and install it from [Node.js Official Website](https://nodejs.org/).

### Steps
1. Clone the repository:
```sh
git clone https://github.com/your-username/express-assignment.git
```
2. Navigate to the project directory:
```sh
cd express-assignment
```
3. Install dependencies:
```sh
npm install
```
4. Create a `.env` file in the root directory and add:
```sh
PORT=5000
```

## Running the Server
### Development Mode (Auto-restart with Nodemon)
```sh
npm run dev
```
### Production Mode
```sh
npm start
```

## API Endpoints
### User Routes
| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| GET    | `/users`      | Get all users        |
| POST   | `/users`      | Create a new user    |
| GET    | `/users/:id`  | Get a user by ID     |
| PUT    | `/users/:id`  | Update a user by ID  |
| DELETE | `/users/:id`  | Delete a user by ID  |

### Product Routes
| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| GET    | `/products`   | Get all products     |
| POST   | `/products`   | Create a new product |
| GET    | `/products/:id` | Get a product by ID  |
| PUT    | `/products/:id` | Update a product by ID |
| DELETE | `/products/:id` | Delete a product by ID |

## Middleware
- **Logger Middleware** (`logger.js`): Logs request method, URL, and timestamp.
- **Global Error Handling Middleware**: Catches and handles errors gracefully.

## Testing
You can test the API endpoints using:
- **Postman**
- **cURL** (Command Line)
```sh
curl -X GET http://localhost:5000/users
```
