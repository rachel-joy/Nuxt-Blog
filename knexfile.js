function config() {
  return {
    client: 'postgresql',
    connection: {
      host:     '127.0.0.1',
      database: 'myapp_example',
      user:     'database_user',
      password: 'database_password',
    },
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