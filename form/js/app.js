import formInstance from './formInstance.js'
import printUser from './formPrint.js'

function Submit() {
    formInstance.firstName.value;
    formInstance.lastName.value;
    formInstance.password.value;
    formInstance.email.value;
    formInstance.phone.value;

    // console.log(formInstance.firstName.value);

    printUser(formInstance);
}

export default Submit();




// Подключение модуля
// https://learn.javascript.ru/modules-intro
// https://www.youtube.com/watch?v=Szz_kigD6_U