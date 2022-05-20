let txtNum = document.getElementById('txtNum')
let listaValores = document.getElementById('listaValores')
let resultado = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionarNumero() {
    if (isNumero(txtNum.value) && !inLista(txtNum.value, valores)) {
        resultado.innerHTML = ''
        valores.push(Number(txtNum.value))
        let option = document.createElement('option')
        option.innerHTML = `Valor ${txtNum.value} adicionado.`
        listaValores.appendChild(option)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    txtNum.value = ''
    txtNum.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
        }
        var media = soma / valores.length
        resultado.innerHTML = ''
        if (valores.length > 1) {
            resultado.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        } else {
            resultado.innerHTML += `<p>Ao todo, temos ${valores.length} número cadastrado.</p>`
        }
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}