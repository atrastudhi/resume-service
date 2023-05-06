const DEFAULT_EMAIL = 'atras.r@gmail.com';

const getOverall = (knex) => {
  return knex.select().table('overall').where({ email: DEFAULT_EMAIL });
}

const updateOverall = (knex, payload) => {
  return knex('overall').update(payload).where({ email: DEFAULT_EMAIL }).returning('*');
};

const overallRepository = {
  getOverall,
  updateOverall,
};

module.exports = overallRepository;
