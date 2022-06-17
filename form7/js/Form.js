class Form {
    constructor(formInstance, formId) {
        this.formInstance = formInstance,
        this.formId = formId
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

    events = () => {
        this.formId.addEventListener("submit", this._submit)
    }
}

export default Form
