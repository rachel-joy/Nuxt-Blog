
exports.up = function(knex, Promise) {
  return knex.raw('CREATE SCHEMA app')
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP SCHEMA app')
};
