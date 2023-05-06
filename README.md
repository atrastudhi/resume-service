# Resume

This is a sample project that uses Hapi.js, Node.js, PostgreSQL, and Knex.js.

## Prerequisites

Before running the application, you need to have the following installed:

- Node.js (version v14.18.2 or higher)
- PostgreSQL

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` in the project directory.
3. Prepare environment variable like following:
- PORT = server port (optional | default to 3000)
- HOST = server host (optional | default to localhost)
- PG_HOST = database host (optional | default to localhost)
- PG_USER = database username
- PG_PASSWORD = database password
4. Create a PostgreSQL database with the name `resume_db` and configure the username and password accordingly.
5. Run the database migrations by running `npm run migrate:latest`.
6. Run the database seeds by running `npm run seed:up`.
7. Start the application by running `npm start`.
8. The server will start at http://localhost:3000.

## Usage

Once the server is running, you can access the API at http://localhost:3000/overall.

## Development

To run the application in development mode, run `npm run start`. This will start the server with nodemon, which will automatically restart the server when changes are made.

## License

This project is licensed under the MIT License. See the LICENSE file for details.