/*Crie uma função assíncrona converterMoeda que faça uma requisição a
 uma API de câmbio para converter um valor de uma moeda para outra. A 
 função deve receber como parâmetros o valor, a moeda inicial e a moeda de destino.  

Armazene as taxas de câmbio em um objeto e use .map() para calcular o valor em várias moedas de uma só vez.*/

btn = document.querySelector('#convBtn')
btn2 = document.querySelector('#allCurrBtn') //criar esse botao

btn.addEventListener('click', () => {
    let valueBox = document.querySelector('#valor').value
    let initialCoin = document.querySelector('#moedaInicial').value
    let finalCoin = document.querySelector('#moedaDestino').value
    //manip da DOM
    let resultDOM = document.createElement('p')
    let selectBody = document.querySelector('body')
    //AJAX boilerplate
    let xhr = new XMLHttpRequest()
    xhr.open("GET", `https://v6.exchangerate-api.com/v6/4cb65b6938420d8cbb814c6e/pair/${initialCoin}/${finalCoin}`) // BASE / TARGET 
    xhr.send()

    let rawData
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            rawData = this.responseText // a magica é aqui
            console.log(`debug pré parse de rawdata: ${rawData}`) //só pra enxergar o objeto e poder acessar a chave depois

            rawData = JSON.parse(rawData)
            console.log(`debug pós parse de rawdata: ${rawData}`) // se não fizer o JSON.parse, vai ficar retornando NaN no result porque ele interpreta como string

            let result = converterMoeda(valueBox)
            resultDOM.innerHTML = `valor convertido: ${result}`
            selectBody.appendChild(resultDOM)
        }
    }

    function converterMoeda(valor) {
        let result
        result = valor * rawData.conversion_rate
        return result
    }
})

btn2.addEventListener('click', () => {
    let valueBox = document.querySelector('#valor').value
    let initialCoin = document.querySelector('#moedaInicial').value   
    let resultDOM = document.createElement('p')
    let selectBody = document.querySelector('body')
    //AJAX boilerplate
    let xhr = new XMLHttpRequest()
    xhr.open("GET", `https://v6.exchangerate-api.com/v6/4cb65b6938420d8cbb814c6e/latest/${initialCoin}`)
    xhr.send()

    xhr.onreadystatechange = function () {

        let apiData
        if (this.readyState === 4 && this.status === 200) {
            apiData = this.responseText //devolve em string
            let apiDataObj = JSON.parse(apiData) //passa pra obj
            console.log(apiData)

            let valor = valueBox
            let resultado = Object.keys(apiDataObj.conversion_rates).map((curr) => {
                let valorConvertido = valor * apiDataObj.conversion_rates[curr]
                return `${valor}BRL = ${valorConvertido.toFixed(2)}${curr}<br>`
            })
        resultDOM.innerHTML = resultado
        selectBody.appendChild(resultDOM)
        }
    }
})

