"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/User", faker => {
  return {
    email: faker.email(),
    username: faker.username(),
    password: "admin"
  };
});

Factory.blueprint("App/Models/Area", faker => {
  return {
    name: faker.name(),
  };
});
