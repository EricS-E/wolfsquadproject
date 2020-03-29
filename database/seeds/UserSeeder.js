"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class UserSeeder {
  async run() {
    const usersArray = await Factory.model("App/Models/User").createMany(2);
    usersArray.forEach(user => {
      console.log(user);
      return Database.table("users").insert(user);
    });
    const defaultUser = await Factory.model("App/Models/User").create({
      email: "admin1@wsp.com",
      username: "admin1",
      password: "admin1"
    });
    Database.table("users").insert(defaultUser);
  }
}

module.exports = UserSeeder;
