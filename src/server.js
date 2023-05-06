const hapi = require('@hapi/hapi');
const knex = require('knex');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const setup = () => {
  // Setup Server
  const server = new hapi.Server({
    port: PORT,
    host: HOST
  })

  // Setup Routes
  server.route(routes);

  // Setup Database
  const database = knex({
    client: 'pg',
    connection: {
      host: process.env.PG_HOST || 'localhost',
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: 'resume_db'
    }
  })

  // Attach database instance to hapi decorator
  server.decorate('request', 'knex', database);

  return server
};

(async () => {
  try {
    const server = setup();
    await server.start();
    console.info(`Server running on PORT: ${PORT}`);
  } catch (err) {
    console.error('Server cannot running', err);
    process.exit(1);
  }
})();
