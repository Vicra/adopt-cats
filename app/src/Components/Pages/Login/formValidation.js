import { validate } from "email-validator";

function findFormErrors(form) {
    const newErrors = {};
    const { email, password } = form;

    if (!email) {
        newErrors.email = "Este campo es requerido";
    } else if (!validate(email)) {
        newErrors.email = "Este correo electrónico no es valido.";
    }

    const passwordPattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (!password) {
        newErrors.password = "Este campo es requerido";
    } else if (!passwordPattern.test(password)) {
        newErrors.password = "Contraseña no cumple con los requerimientos.";
    }
    return newErrors;
}

export default findFormErrors;
