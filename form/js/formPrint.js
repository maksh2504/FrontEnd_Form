import formInstance from './formInstance.js'

function printUser(formInstance) {
    console.log("First name: " + formInstance.firstName.value + "; Last name: " + formInstance.lastName +
        "; Password: " + formInstance.password + "; Email: " + formInstance.email + "; Phone: " +
        formInstance.phone + ".");
    alert("OK")
}

export default printUser;