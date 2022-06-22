import FormItem from "./Input.js"

class Form {
    constructor(formElement) {
        this.formInstance = {}
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

        const element = document.createElement('input')
        element.id = name
        element.type = type
        element.required = true
        section.append(element)

        this.formElement.append(section)

        this.formInstance[name] = new FormItem({
            validator,
            type,
            element,
        })
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
