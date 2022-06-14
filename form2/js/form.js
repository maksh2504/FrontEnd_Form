const form = document.getElementById("form_id")

const formInstance = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    password: document.getElementById("password"),
    confirm: document.getElementById("confirm"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone")
}

const printForm = (formInstance) => {
     console.log("First name: " + formInstance.firstName.value + "; Last name: " + formInstance.lastName.value +
         "; Password: " + formInstance.password.value + "; Email: " + formInstance.email.value + "; Phone: " +
         formInstance.phone.value + ".");
}

const validateName = (name) => {
    if(name.length > 0 && name.length <= 8) {
        return true;
    }

    return false;
}

const validatePassword = () => {
    if(formInstance.password.value === formInstance.confirm.value) {
        return true;
    }
    else {
        console.log('Введите корректный пароль');
        formInstance.confirm.value = "";
        return false;
    }

    return false;
}

const validateEmail = () => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const address = formInstance.email.value;
    if(!reg.test(address)) {
        console.log('Введите корректный e-mail');
        formInstance.email.value = "";
        return false;
    }
    else return true;

    return false;
}

const validatePhone = () => {
    const reg = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    const phone = formInstance.phone.value;
    if(!reg.test(phone)) {
        console.log('Введите корректный телефон');
        formInstance.phone.value = "";
        return false;
    }
    else return true;

    return false;
}


const validate = () => {
    if(validateName(formInstance.firstName.value) && validateName(formInstance.lastName.value)
        && validatePassword() && validateEmail() && validatePhone()) {
        printForm(formInstance);
    }
}


export const submit = (e) => {
    e.preventDefault() // Отключает стандартный обработчик

    validate();
}

form.addEventListener("submit", submit) // Обработчик события (тип, метод)