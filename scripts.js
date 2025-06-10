const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".currency-dolar-euro")

async function convertValues() {
    const inputCurrency = document.querySelector(".input-value").value
    const currencyConvert = document.querySelector(".p-Valor-convert")
    const curencyConverted = document.querySelector(".p-Valor")

    const dolarToday = 5.87
    const euroToday = 6.68
    const libraToday = 7.69
    const liraTurcaToday = 6.75

    if (selectCurrency.value == "dolar") {
        curencyConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrency / dolarToday)
    }

    if (selectCurrency.value == "euro") {
        curencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrency / euroToday)
    }

    if (selectCurrency.value == "libra") {
        curencyConverted.innerHTML = new Intl.NumberFormat("lb-LB", { style: "currency", currency: "GBP" }).format(inputCurrency / libraToday)
    }

    if (selectCurrency.value == "lira") {
        curencyConverted.innerHTML = new Intl.NumberFormat("tl-TL", { style: "currency", currency: "TRY" }).format(inputCurrency / liraTurcaToday)
    }

    currencyConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrency)

}

function changeCurrency() {
    const currencyName = document.querySelector(".p-moeda-dolar")
    const currencyImage = document.querySelector(".img-Moeda-dolar")

    if (selectCurrency.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (selectCurrency.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (selectCurrency.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (selectCurrency.value == "lira") {
        currencyName.innerHTML = "Lira"
        currencyImage.src = "./assets/png-liraturca.png"
    }

    convertValues()
}

selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)