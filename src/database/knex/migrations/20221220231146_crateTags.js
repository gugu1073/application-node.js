exports.up = knex => knex.schema.createTable("movie_tags", table => {
  table.increments("id");
  table.text("category").notNullable();


  table.integer("movie_note_id").references("id").inTable("movie_notes").onDelete("CASCADE");
  table.integer("user_id").references("id").inTable("users");
});


exports.down = knex => knex.schema.dropTable("movie_tags");
