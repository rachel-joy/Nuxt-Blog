
exports.up = (knex, Promise) =>
  knex.schema.withSchema('app').createTable('users', function(table) {
    table.increments('id');
    table.string('full_name');
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamps(false, true);
  });

exports.down = (knex, Promise) =>
  knex.schema.withSchema('app').dropTable('users');
