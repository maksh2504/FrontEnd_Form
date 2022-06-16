class FormItem {
    constructor(element, validator) {
        this.element = element
        this.validator = validator
    }

    validate (field) {
        if (this.validator(this.element, field)){
            return true;
        }

        return false;
    }

    get value() {

    }
}

export default FormItem