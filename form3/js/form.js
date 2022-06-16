import FormItem from "./Input.js"

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
    if(name.value.length > 0 && name.value.length <= 8) {
        return true;
    }

    return false;
}

const validatePassword = (password, confirm) => {
    if(password.value === confirm.value) {
        return true;
    }
    else {
        console.log('Введите корректный пароль');
        confirm = "";
        return false;
    }
}

const validateEmail = (email) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!reg.test(email.value)) {
        console.log('Введите корректный e-mail');
        formInstance.email.value = "";
        return false;
    }
    else return true;
}

const validatePhone = (phone) => {
    const reg = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    if(!reg.test(phone.value)) {
        console.log('Введите корректный телефон');
        formInstance.phone.value = "";
        return false;
    }
    else return true;
}


const inputFirstName = new FormItem(formInstance.firstName, validateName)
const inputLastName = new FormItem(formInstance.lastName, validateName)
const inputPassword = new FormItem(formInstance.password, validatePassword)
const inputEmail = new FormItem(formInstance.email, validateEmail)
const inputPhone = new FormItem(formInstance.phone, validatePhone)


const validate = () => {
    if(inputFirstName.validate() && inputLastName.validate()
        && inputPassword.validate(formInstance.confirm) && inputEmail.validate() && inputPhone.validate()) {
        printForm(formInstance);
    }
}


export const submit = (e) => {
    e.preventDefault(); // Отключает стандартный обработчик

    // inputFirstName.value;
    // inputLastName.value;
    // inputEmail.value;
    // inputPhone.value;

    validate();
}

form.addEventListener("submit", submit) // Обработчик события (тип, метод)

