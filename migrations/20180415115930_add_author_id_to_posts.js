
exports.up = (knex, Promise) =>
  knex.schema.withSchema('app').table('posts', function(table) {
    table.integer('author_id').notNullable().references('id').inTable('app.users').onDelete('CASCADE');
  });

exports.down = (knex, Promise) =>
  knex.schema.withSchema('app').table('posts', function(table) {
    table.dropColumn('author_id');
  });
