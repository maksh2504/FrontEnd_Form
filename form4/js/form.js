import FormItem from "./Input.js"

const form = document.getElementById("form_id")

const printForm = (formInstance) => {
     console.log("First name: " + formInstance.firstName.element.value +
         "; Last name: " + formInstance.lastName.element.value +
         "; Password: " + formInstance.password.element.value +
         "; Email: " + formInstance.email.element.value +
         "; Phone: " + formInstance.phone.element.value + ".");
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

const formInstance = {
    firstName: new FormItem({
        element: document.getElementById("firstName"),
        validator: validateName
    }),
    lastName: new FormItem({
        element: document.getElementById("lastName"),
        validator: validateName
    }),
    password: new FormItem({
        element: document.getElementById("password"),
        validator: validatePassword,
        type: "password",
        confirm: document.getElementById("confirm")
    }),
    email: new FormItem({
        element: document.getElementById("email"),
        validator: validateEmail
    }),
    phone: new FormItem({
        element: document.getElementById("phone"),
        validator: validatePhone
    })
}

const validate = () => {
    return (formInstance.firstName.validate() && formInstance.lastName.validate()
        && formInstance.password.validate(formInstance.confirm) && formInstance.email.validate()
        && formInstance.phone.validate());
}

export const submit = (e) => {
    e.preventDefault(); // Отключает стандартный обработчик

    if (validate()){
        printForm(formInstance);
    }
}

form.addEventListener("submit", submit) // Обработчик события (тип, метод)

