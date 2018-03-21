
exports.up = function(knex, Promise) {
  return knex.schema.withSchema('app').createTable('posts', function(table) {
    table.increments();
    table.timestamps(/*timestamp format:*/ false, /*default to now:*/ true);
    table.string('title');
    table.string('description');
    table.text('content');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.withSchema('app').dropTable('posts');
};
