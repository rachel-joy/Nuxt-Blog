
exports.up = function(knex, Promise) {
  knex.raw('CREATE SCHEMA app')
};

exports.down = function(knex, Promise) {
  knex.raw('DROP SCHEMA app')
};
