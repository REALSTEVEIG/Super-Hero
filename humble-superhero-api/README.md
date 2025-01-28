# Humble Superhero API

## Objective

This API allows users to:

1. Add a new superhero, specifying their:
   - Name
   - Superpower
   - Humility score (a rating from 1 to 10 that shows how humble they are).
2. Fetch a list of superheroes, sorted by their humility score in descending order.

## Features

- **Backend**: Built with NestJS.
- **Endpoints**:
  - `POST /superheroes`: Add a new superhero with validation.
  - `GET /superheroes`: Fetch all superheroes sorted by humility score.
- **Validation**:
  - Ensures the humility score is a number between 1 and 10.
- **Testing**:
  - Includes a Jest unit test for the `POST /superheroes` and `GET /superheroes` endpoints.

---

## How to Run

### Prerequisites

- Node.js (v16 or above)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd humble-superhero-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run start
   ```
4. The API will be available at `http://localhost:3000`.
   ```
5. The Swagger Documentation will be available at `http://localhost:3000/api-docs`.

---

## API Specification

### Add a Superhero

**POST** `/superheroes`

- **Body** (JSON):

  ```json
  {
    "name": "Superman",
    "superpower": "Flight",
    "humilityScore": 8
  }
  ```

- **Validation**:

  - `name`: Required, must be a string.
  - `superpower`: Required, must be a string.
  - `humilityScore`: Required, must be an integer between 1 and 10.

- **Responses**:
  - **201**: Superhero added successfully.
  - **400**: Validation failed or superhero already exists.

### Fetch Superheroes

**GET** `/superheroes`

- **Description**: Retrieves a list of superheroes sorted by their humility score in descending order.

- **Response** (Example):
  ```json
  [
    {
      "name": "Batman",
      "superpower": "Intellect",
      "humilityScore": 10
    },
    {
      "name": "Superman",
      "superpower": "Flight",
      "humilityScore": 8
    }
  ]
  ```

---

## Testing

This project includes a Jest unit test for the `POST /superheroes` endpoint.

1. Run the tests:

   ```bash
   npm run test
   ```

2. Example test scenario:
   - Adds multiple superheroes.
   - Validates that the same name cannot be added twice.

---

## Collaboration

If I were working with a team, I would:

1. Use Git for version control with clear branching strategies (e.g., GitFlow) to manage feature development, bug fixes, and releases.
2. Conduct regular code reviews to ensure quality, share knowledge, and align on best practices.
3. Write documentation for all major modules and maintain an API contract for frontend integration, ensuring clear expectations for the team.
4. Write integration and unit tests to verify functionality and ensure code quality.
5. Ensure my code is readable by adding comments where necessary, making it easier for others to understand and maintain.
6. Establish clear and consistent coding standards for the team to follow, ensuring uniformity and reducing friction when merging code.
7. Pair program for complex features or debugging sessions to ensure knowledge sharing and foster a collaborative environment.
8. Create and maintain a shared documentation repository, including system architecture, API endpoints, and setup instructions.
9. Encourage open communication through tools like Slack or Microsoft Teams to ensure everyone is aligned and aware of task progress.
10. Use project management tools like Jira or Trello to track tasks, progress, and blockers, ensuring transparency and efficient collaboration.

---

## If I Had More Time

If given more time, I would:

1. Add a Users module with Signup and Login functionality so that users can create accounts, log in, and only authenticated users can add or modify superhero data.
2. Add persistent storage using a database like PostgreSQL or MongoDB.
3. Expand test coverage to include:
   - Edge cases for validation.
   - Full end-to-end tests for the API.
4. Dockerize and deploy
5. Integrate CI/CD pipelines for automated testing and deployment to ensure smooth delivery.
6. Add logging and error handling with tools like Winston or Sentry to monitor and manage API errors effectively.

---
