const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const { registerUser, getUserByEmail } = require("../services/auth");
const {
    successResponse,
    badRequestResponse,
} = require("../utils/responseBuilder");
const { IsEmail, IsPassword } = require("../utils/validator");
const HTTPCodes = require("../utils/HttpCodes");

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const errorMessages = [];

        const requiredBody = {
            email,
            password,
        };
        _.forIn(requiredBody, function (value, key) {
            if (!req.body[key]) {
                errorMessages.push(`Parameter '${key}' is required`);
            } else {
                req.body[key] = value ? value.trim() : "";
            }
        });

        if (!IsEmail(email)) errorMessages.push("Parameter 'email' invalid");
        if (!IsPassword(password))
            errorMessages.push("Parameter 'password' invalid");

        let dbUser = await getUserByEmail(email);
        if (dbUser) {
            dbUser = dbUser[0];
            if (!dbUser.verified) {
                res.send(
                    badRequestResponse(
                        "La cuenta no esta verificada, revisa tu correo o contacta a servicio al cliente.",
                        HTTPCodes.BAD_REQUEST
                    )
                );
                return;
            }

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

                const refreshToken = jwt.sign(
                    {
                        email: dbUser.email,
                    },
                    process.env.REFRESH_TOKEN_SECRET,
                    {
                        expiresIn: "30d",
                    }
                );

                res.send(
                    successResponse({
                        accessToken,
                        refreshToken,
                    })
                );
            } else {
                res.status(HTTPCodes.UNAUTHORIZED).send(
                    badRequestResponse("Unauthorized", HTTPCodes.UNAUTHORIZED)
                );
            }
        } else {
            res.status(HTTPCodes.NOT_FOUND).send(
                badRequestResponse("Email does not exist", HTTPCodes.NOT_FOUND)
            );
        }
    } catch (e) {}
}

async function register(req, res) {
    try {
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
        if (!IsPassword(password))
            errorMessages.push("Invalid 'password' format");
        if (name && name.length < 15)
            errorMessages.push("Invalid 'name' format, minimum 15 characters");
        if (address && address.length < 30)
            errorMessages.push(
                "Invalid 'address' format, minimum 30 characters"
            );
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

            const newUserId = await registerUser(newUser);
            if (newUserId && newUserId.length) {
                res.send(successResponse(newUserId[0]));
            } else {
                res.status(HTTPCodes.INTERNAL_SERVER_ERROR).send(
                    badRequestResponse(
                        "Unable to create",
                        HTTPCodes.INTERNAL_SERVER_ERROR
                    )
                );
            }
        }
    } catch (e) {
        if (e.toString().includes("Duplicate entry")) {
            res.status(HTTPCodes.BAD_REQUEST).send(
                badRequestResponse("Email/dni already exists")
            );
        } else {
            console.log(e.toString());
            res.status(HTTPCodes.INTERNAL_SERVER_ERROR).send(
                badRequestResponse(
                    "Internal Server Error",
                    HTTPCodes.INTERNAL_SERVER_ERROR
                )
            );
        }
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
