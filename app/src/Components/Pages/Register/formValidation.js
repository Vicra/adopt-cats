import forIn from "lodash/forIn";

function findFormErrors(form, cleanUp) {
    const newErrors = {};
    cleanUp(form);
    const {
        email,
        password,
        confirmPassword,
        name,
        dni,
        address,
        role,
        zipcode,
        state,
    } = form;

    const requiredBody = {
        email,
        password,
        confirmPassword,
        name,
        role,
        dni,
        address,
        zipcode,
        state,
    };
    forIn(requiredBody, function (value, key) {
        if (!form[key]) {
            newErrors[key] = `Este campo es requerido`;
        } else {
            form[key] = value ? value.trim() : "";
        }
    });

    if (confirmPassword !== password) {
        newErrors.confirmPassword = `Las contraseñas no coinciden.`;
    }
    return newErrors;
}

export default findFormErrors;
