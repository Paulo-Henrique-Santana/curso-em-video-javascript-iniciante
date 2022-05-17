function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')
    var contagem = document.createElement('p')
    contagem.setAttribute('id', 'contagem')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {    
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        }

        resultado.innerHTML += `\u{1F3C1}`
    }
}