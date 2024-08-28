# Node.js Authentication System

This project is a simple authentication system built using Node.js, Express.js, Mongoose, and JSON Web Tokens (JWT). It includes user registration, login, and JWT-based authentication middleware.

## Features

- User registration with name, email, and password
- Password hashing using bcrypt.js
- User login with JWT authentication
- Secure routes with JWT verification middleware
- MongoDB as the database for storing user information

## Requirements

- Node.js v20.11.1 or later
- MongoDB instance
- npm or yarn (for package management)

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/McTech6/MERN-AUTH.git
    cd  Tidding Ramsey
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Environment variables:**

    Create a `.env` file in the root directory and add the following environment variables:

    ```bash
    MONGODB_URI  
    PORT 
    JWT_TOKEN 
    ```

4. **Run the application:**

    ```bash
    npm run dev
    ```

    The server will start on `http://localhost:3000`.

## API Endpoints

- **POST /api/user/register:** Register a new user.
- **POST /api/user/login:** Log in an existing user.
- **Protected Routes:** Use the `verify` middleware to protect routes that require authentication.

## Project Structure

- `index.js`: Entry point of the application
- `routes/auth.js`: Route definitions for user authentication
- `controller/authController.js`: Controller functions for handling authentication logic
- `model/user.js`: Mongoose schema for the User model
- `middleware/verify.js`: JWT verification middleware

## Contributing

Feel free to open issues or submit pull requests with improvements. Contributions are welcome!

## License

This project is licensed under the MIT License.
