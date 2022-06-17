import Form from "./Form.js"
import FormItem from "./Input.js"


const formInstance = {
    firstName: new FormItem({
        element: document.getElementById("firstName"),
        validator: (name) => name.value.length > 0 && name.value.length <= 8
    }),
    lastName: new FormItem({
        element: document.getElementById("lastName"),
        validator: (name) => name.value.length > 0 && name.value.length <= 8
    }),
    password: new FormItem({
        element: document.getElementById("password"),
        validator: (password, confirm) => password.value === confirm.value,
        type: "password",
        confirm: document.getElementById("confirm")
    }),
    email: new FormItem({
        element: document.getElementById("email"),
        validator: (email) => {
            const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(reg.test(email.value)) {
                return true;
            }
            else console.log('Введите корректный e-mail');
        }
    }),
    phone: new FormItem({
        element: document.getElementById("phone"),
        validator: (phone) => {
            const reg = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
            if(reg.test(phone.value)) {
                return true;
            }
            else console.log('Введите корректный телефон');
        }
    })
}

const form1 = new Form(formInstance, document.getElementById("form_id"))
form1.events()
