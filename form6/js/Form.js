import FormItem from "./Input.js"

class Form {
    constructor() {
        this.formInstance = {
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
                    else {
                        console.log('Введите корректный e-mail');
                        this.formInstance.email.element.value = "";
                    }
                }
            }),
            phone: new FormItem({
                element: document.getElementById("phone"),
                validator: (phone) => {
                    const reg = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
                    if(reg.test(phone.value)) {
                        return true;
                    }
                    else {
                        console.log('Введите корректный телефон');
                        this.formInstance.phone.element.value = "";
                    }
                }
            })
        }
    }

    _printForm () {
        console.log("First name: " + this.formInstance.firstName.element.value +
            "; Last name: " + this.formInstance.lastName.element.value +
            "; Password: " + this.formInstance.password.element.value +
            "; Email: " + this.formInstance.email.element.value +
            "; Phone: " + this.formInstance.phone.element.value + ".");
    }

    _validate () {
        return (this.formInstance.firstName.validate() && this.formInstance.lastName.validate()
            && this.formInstance.password.validate(this.formInstance.confirm)
            && this.formInstance.email.validate() && this.formInstance.phone.validate());
    }

    submit = (e) => {
        e.preventDefault(); // Отключает стандартный обработчик

        if (this._validate()){
            this._printForm();
        }
    }
}

export default Form
