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

function registerUser(newUser) {
    return knex("users").insert({
        ...newUser,
    });
}

async function getUserByEmail(email) {
    return await knex
        .select("name", "email", "password", "salt")
        .table("users")
        .where("email", email);
}

module.exports = {
    registerUser,
    getUserByEmail,
};
