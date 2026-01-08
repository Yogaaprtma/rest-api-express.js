# REST API Expert - Clean Architecture

A robust and production-ready RESTful API built with Node.js, Express, and Prisma ORM. This project demonstrates **Clean Architecture** principles, separating concerns into Controllers, Services, and Repositories. It includes JWT Authentication, comprehensive Error Handling, and Swagger Documentation.

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL
- **ORM:** Prisma (v5)
- **Authentication:** JSON Web Token (JWT)
- **Documentation:** Swagger UI
- **Logging:** Winston
- **Security:** Helmet & CORS

## 📂 Project Structure (Clean Architecture)
src/
├── app.js              # Application configuration (middlewares, routes)
├── server.js           # Server entry point
│
├── config/             # Configuration (environment, database, logger)
│
├── controllers/        # HTTP request handlers (input/output)
├── services/           # Business logic layer
├── repositories/       # Data access layer (Prisma queries)
│
├── middlewares/        # Request/response interceptors (auth, error handling)
├── routes/             # API route definitions
│
└── utils/              # Shared utilities (response helpers, custom errors)

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/username-anda/rest-api-expert.git
    cd rest-api-expert
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the root directory and configure your credentials:
    ```env
    # Database Config
    DATABASE_URL="mysql://root:@localhost:3306/db_api_expert"

    # Server Config
    PORT=3000
    NODE_ENV=development

    # Security Keys
    JWT_SECRET="your_super_secret_jwt_key"

    # Client API Keys (For Token Generation)
    API_CLIENT_KEY="optima-client-id"
    API_CLIENT_SECRET="optima-secret-key-2026"
    ```

4.  **Database Migration**
    Push the schema to your MySQL database:
    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Run the Server**
    ```bash
    npm run dev
    ```

## 📖 API Documentation

Once the server is running, you can access the interactive API documentation (Swagger UI) at:

**[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

### Authentication Flow (How to try)

1.  **Get Access Token:**
    - Endpoint: `POST /api/v1/auth/token`
    - Headers:
        - `x-api-key`: `optima-client-id`
        - `x-api-secret`: `optima-secret-key-2026`
    - Response: You will receive a `token`.

2.  **Access Protected Routes:**
    - Use the token in the `Authorization` header for other endpoints (CRUD Products).
    - Format: `Bearer <your_token>`

## 📝 Features

- [x] **CRUD Operations** for Products
- [x] **JWT Authentication** (Header-based API Key exchange)
- [x] **Validation** & Error Handling
- [x] **Pagination** & Filtering (Ready to implement in Repo layer)
- [x] **Swagger** Documentation

## 👤 Author

**Yoga Adi Pratama**
- Learning Node.js & Clean Architecture