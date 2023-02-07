const knex = require("knex")({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
});

async function registerUser(newUser) {
    return await knex("users").insert({
        email: newUser.email,
        name: newUser.name,
        password: newUser.password,
        salt: newUser.salt,
        role: newUser.role,
        address: newUser.address,
        state: newUser.state,
        zipcode: newUser.zipcode,
        dni: newUser.dni,
    });
}

async function getUserByEmail(email) {
    return await knex
        .select("name", "email", "password", "salt", "approved", "verified")
        .table("users")
        .where("email", email);
}

module.exports = {
    registerUser,
    getUserByEmail,
};
