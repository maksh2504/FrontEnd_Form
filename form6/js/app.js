import Form from "./Form.js"


const form = document.getElementById("form_id")

const submit = new Form()

form.addEventListener("submit", submit.submit) // Обработчик события (тип, метод)
