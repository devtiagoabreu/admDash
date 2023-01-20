const url="http://localhost:4000/api"

function getContasPagarSaldoTotalMesAtual(){
  axios.get(url+'/contasPagarSaldoTotalMesAtual')
  .then(response => {
    const data = response.data
    contasPagarSaldoTotalMesAtual.textContent = JSON.stringify(parseFloat(data.pagarMesAtual['pagarMesAtual']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).replace('"','').replace('"','')
  })
  .catch(error => console.log(error))
}

function getContasPagarSaldoTotalProgramado(){
  axios.get(url+'/contasPagarSaldoTotalProgramado')
  .then(response => {
    const data = response.data
    contasPagarSaldoTotalProgramado.textContent = JSON.stringify(parseFloat(data.pagarProgramado['pagarProgramado']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).replace('"','').replace('"','')+' prog.'
  })
  .catch(error => console.log(error))
}

function getContasReceberSaldoTotalMesAtual(){
  axios.get(url+'/contasReceberSaldoTotalMesAtual')
  .then(response => {
    const data = response.data
    contasReceberSaldoTotalMesAtual.textContent = JSON.stringify(parseFloat(data.receberMesAtual['receberMesAtual']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).replace('"','').replace('"','')
  })
  .catch(error => console.log(error))
}

function getContasReceberSaldoTotalProgramado(){
  axios.get(url+'/contasReceberSaldoTotalProgramado')
  .then(response => {
    const data = response.data
    contasReceberSaldoTotalProgramado.textContent = JSON.stringify(parseFloat(data.receberProgramado['receberProgramado']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).replace('"','').replace('"','')+' prog.'
  })
  .catch(error => console.log(error))
}


getContasPagarSaldoTotalMesAtual()

getContasPagarSaldoTotalProgramado()

getContasReceberSaldoTotalMesAtual()

getContasReceberSaldoTotalProgramado()