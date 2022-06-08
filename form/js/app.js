let user = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
}

function Print() {
    console.log("First name: " + user.firstName + "; Last name: " + user.lastName +
        "; Password: " + user.password + "; Email: " + user.email + "; Phone: " + user.phone + ".");
    alert("OK")
}

function Submit() {
    user.firstName = document.getElementById("firstName").value;
    user.lastName = document.getElementById("lastName").value;
    user.password = document.getElementById("password").value;
    user.email = document.getElementById("email").value;
    user.phone = document.getElementById("phone").value;

    Print();
}
