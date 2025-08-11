# Domain-Driven Design in Node.js

A robust foundation for building scalable and maintainable applications using Domain-Driven Design (DDD) and Clean Architecture with TypeScript.

## ✨ Features

- **Clean Architecture**: A clear separation of concerns between the domain, application, and infrastructure layers.
- **Domain-Driven Design**: Models the application around the business domain.
- **TypeScript**: Strong typing for better code quality and developer experience.
- **Test-Driven Development**: High test coverage with Vitest.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (included with Node.js)

### Installation

1.  Clone the repository:
    ```sh
    git clone <your-repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd ddd-nodejs
    ```
3.  Install dependencies:
    ```sh
    npm install
    ```

## 🧪 Running Tests

This project uses [Vitest](https://vitest.dev/) for running tests.

- **Run all tests:**
  ```sh
  npm test
  ```
- **Run tests in watch mode:**
  ```sh
  npm run test:watch
  ```

## 🏛️ Architecture

This project follows the principles of **Clean Architecture**, which results in a system that is:

- Independent of Frameworks
- Testable
- Independent of UI
- Independent of Database

The core of the architecture is the **Domain Layer**, which contains the enterprise-wide business rules and entities. This layer is the most stable and independent part of the application.

Surrounding the domain are other layers, such as the **Application Layer** (containing use cases) and the **Infrastructure Layer** (containing implementations for databases, external APIs, etc.). The dependency rule is that all dependencies must point inwards, towards the domain.

### Project Structure

The `src` directory is organized to reflect the Clean Architecture principles:

- `src/core`: Contains generic, reusable components like base classes for entities and value objects.
- `src/domain`: Contains the core business logic of the application.
  - `entities`: The domain models that encapsulate business rules.
  - `repositories`: Interfaces defining the contracts for data persistence.
  - `use-cases`: Application-specific business rules that orchestrate the domain entities.

This structure ensures a high degree of separation of concerns, making the codebase easier to understand, maintain, and test.

## 📄 License

This project is licensed under the ISC License.