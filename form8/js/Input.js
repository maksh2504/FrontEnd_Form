class FormItem {
    constructor({ element, validator, type = 'input', confirm }) {
        this.element = element
        this.validator = validator
        this.type = type
        this.confirm = confirm
    }

    validate () {
        if (this.type === 'password'){
            return this.validator(this.element, this.confirm)
        }
        else {
            return this.validator(this.element)
        }
    }

    get value() {
        return this.element.value
    }
}

export default FormItem
