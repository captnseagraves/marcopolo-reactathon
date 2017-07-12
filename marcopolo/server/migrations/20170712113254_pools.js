
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pools', (table)=>{
    table.increments('id').primary()
    table.string('name').notNullable();
    table.string('description');
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pools')
};
