function config() {
  return {
    client: 'pg',
    // connection: 'postgres://web-user:password@postgres/web',
    // connection: {
    //   host: 'postgres',
    //   database: 'web',
    //   user: 'web-user',
    //   password: 'password'
    // },
    connection: {
      host:     process.env['POSTGRES_HOST'],
      database: process.env['POSTGRES_DB'],
      user:     process.env['POSTGRES_USER'],
      password: process.env['POSTGRES_PASSWORD'],
    },
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
