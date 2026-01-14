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
- **Security:** Helmet, CORS, & Rate Limiting

## 📂 Project Structure (Clean Architecture)
```text
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
```

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
    Create a `.env` file in the root directory. You can copy from `.env.example` and configure your credentials:

    ```bash
    cp .env.example .env
    ```

    Inside `.env`, fill in your own configuration:
    ```env
    # Database Config
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"

    # Server Config
    PORT=3000
    NODE_ENV=development

    # Security Keys
    JWT_SECRET="your_random_secret_string_here"

    # Client API Keys (For Token Generation)
    API_CLIENT_KEY="define_your_client_key"
    API_CLIENT_SECRET="define_your_client_secret"

    # Rate Limiting
    RATE_LIMIT_WINDOW=60000
    RATE_LIMIT_MAX=100
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
        - `x-api-key`: `define_your_client_key`
        - `x-api-secret`: `define_your_client_secret`
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
- [x] **Winston** Logging
- [x] **Security** Best Practices (Helmet, CORS)
- [x] **Rate Limiting** (Hard limit for DDoS/Brute Force protection)
- [x] **Traffic Throttling** (Progressive delays for API stability)

## 👤 Author

**Yoga Adi Pratama**
- Learning Node.js & Clean Architecture