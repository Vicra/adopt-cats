const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const { registerUser } = require("../services/auth");
const {
    successResponse,
    badRequestResponse,
} = require("../utils/responseBuilder");
const { IsEmail, IsPassword } = require("../utils/validator");
const { isDecimal } = require("../utils/validator");
const HTTPCodes = require("../utils/HttpCodes");

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const errorMessages = [];

        if (!email) {
            errorMessages.push("Parameter 'email' is required");
        } else if (!IsEmail(email)) {
            errorMessages.push("Parameter 'email' invalid");
        }

        if (!password) {
            errorMessages.push("Parameter 'password' is required");
        } else if (!IsPassword(password)) {
            errorMessages.push("Parameter 'password' invalid");
        }

        let dbUser = await getStudentByEmail(email);
        if (dbUser) {
            dbUser = dbUser[0];
            const userEncryptedDetails = encryptPassword(password, dbUser.salt);
            if (userEncryptedDetails.encryptedPassword === dbUser.password) {
                const accessToken = jwt.sign(
                    {
                        email: dbUser.email,
                        name: dbUser.name,
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn: "1h",
                    }
                );

                // TODO: do we need email?
                const refreshToken = jwt.sign(
                    {
                        email: dbUser.email,
                    },
                    process.env.REFRESH_TOKEN_SECRET,
                    {
                        expiresIn: "30d",
                    }
                );

                res.send({
                    accessToken,
                    refreshToken,
                });
            } else {
                res.status(HTTPCodes.UNAUTHORIZED).send({});
            }
        } else {
            res.status(404).send("Email does not exist");
        }
        console.log(dbUser);
    } catch (e) {}
}

async function register(req, res) {
    const { email, password, name, role, dni, address, zipcode, state } =
        req.body;

    const errorMessages = [];
    const requiredBody = {
        email,
        password,
        name,
        role,
        dni,
        address,
        zipcode,
        state,
    };
    _.forIn(requiredBody, function (value, key) {
        if (!req.body[key]) {
            errorMessages.push(`Parameter '${key}' is required`);
        } else {
            req.body[key] = value ? value.trim() : "";
        }
    });

    if (!IsEmail(email)) errorMessages.push("Invalid 'email' format");
    if (!IsPassword(password)) errorMessages.push("Invalid 'password' format");
    if (name && name.length < 15)
        errorMessages.push("Invalid 'name' format, minimum 15 characters");
    if (address && address.length < 30)
        errorMessages.push("Invalid 'address' format, minimum 30 characters");
    if (zipcode && zipcode.length != 5)
        errorMessages.push("Invalid 'zipcode' format, 5 characters");
    if (state && state.length < 4)
        errorMessages.push("Invalid 'state' format, minimum 4 characters");
    if (isNaN(dni)) errorMessages.push("Invalid 'dni' format");
    if (isNaN(role)) errorMessages.push("Invalid 'role' format");

    if (errorMessages.length) {
        res.status(HTTPCodes.BAD_REQUEST).send(
            badRequestResponse(errorMessages)
        );
    } else {
        const { salt, encryptedPassword } = encryptPassword(password);

        const newUser = {
            ...req.body,
            salt,
            password: encryptedPassword,
        };

        const newUserId = registerUser(newUser);
        res.send(successResponse(newUserId));
    }
}

function encryptPassword(
    password,
    salt = crypto.randomBytes(128).toString("base64")
) {
    const encryptedPassword = crypto
        .pbkdf2Sync(
            password,
            salt,
            parseInt(process.env.HASH_ITERATIONS) || 10000,
            parseInt(process.env.KEY_LENGTH) || 64,
            "sha256"
        )
        .toString("base64");

    return {
        salt,
        encryptedPassword,
    };
}

module.exports = {
    register,
    login,
};
