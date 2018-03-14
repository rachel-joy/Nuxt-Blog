function config() {
  return {
    client: 'postgresql',
    connection: 'postgres://localhost/web',
    // connection: {
    //   host:     process.env['POSTGRES_HOST'],
    //   database: process.env['POSTGRES_DB'],
    //   user:     process.env['POSTGRES_USER'],
    //   password: process.env['POSTGRES_PASSWORD'],
    // },
    migrations: {
      tableName: 'knex_migrations'
    }
  };
}

module.exports = {
  development: config(),
  staging: config(),
  production: config(),
};
