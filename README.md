Here's the README in a more concise and batch-style format:

---

# Node.js Authentication System

A simple authentication system built with Node.js, Express.js, Mongoose, and JSON Web Tokens (JWT). Includes user registration, login, and JWT-based authentication middleware.

## Features

- User registration with name, email, and password
- Password hashing using bcrypt.js
- User login with JWT authentication
- Secure routes with JWT verification middleware
- MongoDB for user data storage

## Requirements

- Node.js v20.11.1 or later
- MongoDB instance
- npm or yarn

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/McTech6/MERN-AUTH.git
    cd MERN-AUTH
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Environment variables:**
    Create a `.env` file in the root directory with:
    ```bash
    MONGODB_URI=your_mongodb_uri
    PORT=your_port_number
    JWT_TOKEN=your_jwt_secret
    ```

4. **Run the application:**
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:3000`.

## API Endpoints

- **POST /api/user/register:** Register a new user.
- **POST /api/user/login:** Log in an existing user.
- **Protected Routes:** Use `verify` middleware for authenticated routes.

## Project Structure

- `index.js`: Entry point
- `routes/auth.js`: Authentication routes
- `controller/authController.js`: Authentication logic
- `model/user.js`: User schema
- `middleware/verify.js`: JWT verification middleware

## Contributing

Open issues or submit pull requests. Contributions are welcome!

## License

MIT License

---

Feel free to adjust any specifics, especially environment variable names or descriptions, to better fit your actual setup and needs.