let userMask = {
    firstName: this,
    lastName: this,
    password: this,
    email: this,
    phone: this,

    print: function () {
        console.log("First name: " + this.firstName + "; Last name: " + this.lastName +
            "; Password: " + this.password + "; Email: " + this.email + "; Phone: " + this.phone + ".");
    }
}

let user = Object.create(userMask)


document.addEventListener('DOMContentLoaded', () => {

    const inputElement = document.getElementById('phone') // ищем наш единственный input
    const maskOptions = { // создаем объект параметров
        mask: '+{375}(00)000-00-00' // задаем единственный параметр mask
    }
    IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
})

function Print() {
    user.print()
    const form = document.getElementById('form_id').reset()
}

function ChackPassword() {
    // console.log("ChackPw")
    const password = document.getElementById('password')
    let confirm = document.getElementById('confirm')
    // console.log("Pas1")
    if (password.value != confirm.value){
        // console.log("Pas2")
        alert("Incorrect password")
        confirm.value = ""
        password.focus()
        return false;
    }
    // console.log("Pas3")
}

function ChackEmail() {
    let email = document.getElementById('email')
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(email.value) == false) {
        alert('Please enter a valid e-mail');
        //document.getElementById('firstName').focus()
        email.value = ""
        return false;
    }
}

function ChackPhone() {
    let phone = document.getElementById('phone')
    if(phone.value.length != '+375(00)000-00-00'.length) {
        alert('Please enter a valid phone');

        //document.getElementById('firstName').focus()
        phone.value = ""
        return false;
    }
}


function Constructor() {
    userMask.firstName = document.getElementById("firstName").value;
    userMask.lastName = document.getElementById("lastName").value;
    userMask.password = document.getElementById("password").value;
    userMask.email = document.getElementById("email").value;
    userMask.phone = document.getElementById("phone").value;

    Print();
}
