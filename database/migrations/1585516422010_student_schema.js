'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class StudentSchema extends Schema {
  up() {
    this.create('students', (table) => {
      table.increments();
      table.integer('group_id').unsigned().references('id').inTable('groups');
      table.string('name', 100).notNullable();
      table.string('gender', 1).notNullable().defaultTo('F');
      table.integer('age').notNullable();
      table.string('schedule', 1).notNullable().defaultTo('M');
      table.timestamps(true, true);
    });
  }

  down() {
    this.drop('students');
  }
}

module.exports = StudentSchema;
