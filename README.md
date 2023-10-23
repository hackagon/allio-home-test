# Project Name

A brief introduction to your project goes here.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Start PostgreSQL](#1-start-postgresql)
  - [2. Create a .env File](#2-create-a-env-file)
  - [3. Run Migrations](#3-run-migrations)
  - [4. Run the Project](#4-run-the-project)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a NestJS application that utilizes AlphaVantage to connect to the time series stock API and stores data in a PostgreSQL database using Mikro ORM. The project follows a clean architecture with a clear separation of layers: presentation, domain, and infrastructure.

- **Presentation**: Contains controllers, GraphQL resolvers, and mutations.
- **Domain**: Contains use cases and business logic.
- **Infrastructure**: Connects to AlphaVantage API and the PostgreSQL database.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- [Docker](https://www.docker.com/) for running PostgreSQL using Docker Compose.
- [Node.js](https://nodejs.org/) for running JavaScript/TypeScript code.
- [Yarn](https://classic.yarnpkg.com/en/docs/install) for managing dependencies.

## Getting Started

Follow these steps to set up and run the project:

### 1. Start PostgreSQL

To run PostgreSQL using Docker Compose, execute the following command:

```bash
docker-compose up postgres
```

### 2. Create a .env File

Create a `.env` file similar to the provided `.env.example` file and set the necessary environment variables. These variables may include database connection details, AlphaVantage API key, and other configurations.

### 3. Run Migrations

To set up the database schema, run the Mikro ORM migrations:

```bash
npx dotenv mikro-orm migration:up
```

### 4. Import dummy data

Import dummy data from `dummy` folder by copy and past \*.sql files to sql editor

### 5. Run the Project

Start the NestJS application by running:

```bash
yarn start
```

## Project Structure

The project follows a clean architecture with the following directory structure:

- `presentation`: Contains controllers, GraphQL resolvers, and mutations.
- `domain`: Contains use cases and business logic.
- `infrastructure`: Connects to AlphaVantage API and the PostgreSQL database.

You can find more specific code and organization details within each of these directories.

## Usage

Provide information on how to use the project, including API endpoints, GraphQL queries/mutations, and any other relevant usage instructions.

## Contributing

If you'd like to contribute to this project, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [License Name] License - see the [LICENSE.md](LICENSE.md) file for details.
