class Form {
    constructor(formInstance, formElement) {
        this.formInstance = formInstance,
        this.formElement = formElement

        this.formElement.addEventListener("submit", this._submit)
    }

    _printForm = () => {
        for(let field in this.formInstance) {
            console.log(field + ": " + this.formInstance[field].element.value);
        }

    }

    _validate = () => {
        for(let field in this.formInstance) {
            if(!this.formInstance[field].validate()) return false
        }

        return true
    }

    _submit = (e) => {
        e.preventDefault(); // Отключает стандартный обработчик

        if (this._validate()){
            this._printForm();
        }
    }

    addField ({type, label, name, validator}) {
        const section = document.createElement('div');

        const inputLabel = document.createElement('label')
        inputLabel.innerHTML = label
        section.append(inputLabel)

        const input = document.createElement('input')
        input.id = name
        input.type = type
        input.required = true
        section.append(input)

        this.formElement.append(section)

        if (name === 'password') {
            this.addField({
                type: 'password',
                label: 'Confirm:',
                name: 'confirm'
            })
        }


        if (name === 'confirm') {
            this.formInstance['password'].element = document.getElementById(name)
            this.formInstance['password'].validator = validator
            this.formInstance['password'].type = 'password'
            this.formInstance['password'].confirm = document.getElementById('confirm')
        }
        else {
            this.formInstance[name].element = document.getElementById(name)
            this.formInstance[name].validator = validator
        }
    }

    addButton({type, label, name}) {
        const section = document.createElement('div');
        section.id = name;

        const button = document.createElement('button')
        button.type = type
        button.textContent = label
        section.append(button)

        this.formElement.append(section)
    }
}

export default Form
