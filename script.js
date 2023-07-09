const form = document.querySelector(".form");
const namee = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    let yourName = namee.value;
    let yourSecondName = secondName.value;
    let yourEmail = email.value;
    let yourPhone = phone.value;

    fetch('https://polinashneider.space/user', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer: Olgaklopotskaya"
            },
            body: JSON.stringify({
                "name": yourName,
                "secondName": yourSecondName,
                "phone": yourPhone,
                "email": yourEmail,
                "agree": true
            })
        })
        .then((result) => {
            alert('Отправка прошла успешно')
            return result.json()
        })
        .catch((error) => {
            alert('Ошибка')

        })
})


// Загрузка данных

fetch('https://polinashneider.space/last-user', {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer: Olgaklopotskaya"
    },
}).then(
    (data) => data.json()
    // Вывод в консоль данных о последнем добавленном пользователе
).then((res) => console.log(res))