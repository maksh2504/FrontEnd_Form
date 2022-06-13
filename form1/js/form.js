 const formInstance = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    password: document.getElementById("password"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone")
}

 const printForm = (formInstance) => {
    console.log("First name: " + formInstance.firstName.value + "; Last name: " + formInstance.lastName.value +
        "; Password: " + formInstance.password.value + "; Email: " + formInstance.email.value + "; Phone: " +
        formInstance.phone.value + ".");
    // alert("OK");
}

export const submit = () => {
    printForm(formInstance);
}

