function gerarTabuada() {
   let numero = document.getElementById('numero')
   let resultado = document.getElementById('resultado')

   if (numero.value.length == 0) {
       alert('Por favor, digite um número!')
   } else {
       let n = Number(numero.value)
       resultado.innerHTML = ''
       for (let c = 1; c <= 10; c++) {
           let option = document.createElement('option')
           option.innerHTML = `${n} x ${c} = ${n * c}`
           option.value = `tab${c}`
           resultado.appendChild(option)
       }
   }
}