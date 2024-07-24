const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value) || 0;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.6;
    const euroToday = 6.1;
    const bitcoinToday = 200000; // Exemplo de taxa de conversão para Bitcoin
    const gbpToday = 7.2; // Exemplo de taxa de conversão para Libra

    // Atualiza o valor da moeda de conversão
    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
    }

    if (currencySelect.value === "gbp") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / gbpToday);
    }

    // Atualiza o valor da moeda a ser convertida
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "./img/dolar.png";
        convertValues(); // Atualiza os valores ao trocar a moeda
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./img/euro.png";
        convertValues(); // Atualiza os valores ao trocar a moeda
    }

    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./img/bitcoin.png"; // Certifique-se de ter essa imagem
        convertValues(); // Atualiza os valores ao trocar a moeda
    }

    if (currencySelect.value === "gbp") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./img/libra.png"; // Certifique-se de ter essa imagem
        convertValues(); // Atualiza os valores ao trocar a moeda
    }
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
