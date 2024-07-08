// console.log("HelloWorld")
const kmPrice = 0.21
let price
let discount
let finalPrice
let flag = 0
const message = document.getElementById('outprice')
const formElement = document.getElementById('form-price')
// console.log(formElement)
let name = document.getElementById('name')
let surname = document.getElementById('surname')

const ageType = document.getElementById('age')
// console.log(ageType)

const km = document.getElementById('km')

const calcButton = document.getElementById('calc')

formElement.addEventListener('submit', function (event) {
    event.preventDefault()


    console.log(ageType.value)

    price = kmPrice * km.value
    // console.log(price);

    if (ageType.value == 'a') {
        finalPrice = price
        flag++
    }

    else if (ageType.value == 'o') {
        discount = (price * 40) / 100
        finalPrice = price - discount
        flag++
        // console.log(flag);
    }

    else if (ageType.value == 'm') {
        discount = (price * 20) / 100
        finalPrice = price - discount
        flag++
        // console.log(flag);
    }
    console.log(finalPrice);
    if (flag == 1) {
        finalPrice = finalPrice.toFixed(2)
        message.innerHTML = name.value + " " + surname.value + " il prezzo del tuo biglietto è: " + finalPrice + "€"
    }
    else if (flag > 1) {
        message.innerHTML = "Devi ricaricare la pagina"
    }
    else {
        message.innerHTML = "Non hai inserito tutti i campi richiesti"
    }
    console.log(finalPrice);
})

