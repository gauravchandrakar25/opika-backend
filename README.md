# Opika Backend Application

This repository contains a Node.js backend application built with Express, MongoDB, and Redis.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)

## Features

- **MongoDB Integration**: Integration with MongoDB for data storage.
- **Redis Caching**: Caching user data with Redis for faster access.
- **Error Handling**: Centralized error handling and logging.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (Node Package Manager)
- MongoDB (Atlas or local instance)
- Redis

## Configuration

Create a .env file in the root directory:

    ```bash
    PORT=5000
    CONNECTION_STRING=<Your_MongoDB_Connection_URI>
    REDIS_HOST=localhost
    REDIS_PORT=6379
    ```

Replace <Your_MongoDB_Connection_URI> with your MongoDB connection string.

## Getting Started

Follow these steps to get the backend application up and running on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Running the application:

   ```bash
   nodemon server.ts
   ```

## API Endpoints

- GET /api/users/:id
  : Fetch user by ID.
