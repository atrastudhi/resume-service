// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'resume_db',
      user:     process.env.PG_USER,
      password: process.env.PG_PASSWORD
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
