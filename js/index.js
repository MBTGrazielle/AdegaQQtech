const escolhaDoVinho = document.getElementById('escolha-Vinhos');
const resposta = document.querySelector('.resposta');
const imgValor = document.querySelector('.img-Valor');
const finalizarBtn = document.querySelector('.finalizar-btn');

let tinto = 50;
let branco = 200;
let rose = 800;
let percentualTotal;
let valorTotalDeVinhos = tinto + branco + rose;

function calcularPercentualTotal(tipo) {
  return (percentualTotal = (tipo * 100) / valorTotalDeVinhos);
}

escolhaDoVinho.addEventListener('change', function () {
  let valorDaEscolha = escolhaDoVinho.value;

  if (valorDaEscolha === 'selecione') {
    imgValor.src = './assets/adegaQQTech.png';
    resposta.innerHTML = `Escolha uma opção de vinho para verificar o seu estoque`;
  } else if (valorDaEscolha === 'tinto') {
    calcularPercentualTotal(tinto);
    imgValor.src = './assets/tinto.png';
    resposta.innerHTML = `Quantidade: ${tinto} <br>
    Percentual: ${percentualTotal.toFixed(1)}%`;
  } else if (valorDaEscolha === 'branco') {
    calcularPercentualTotal(branco);
    imgValor.src = './assets/branco.png';
    resposta.innerHTML = `Quantidade: ${branco} <br>
    Percentual: ${percentualTotal.toFixed(1)}%`;
  } else if (valorDaEscolha === 'rose') {
    calcularPercentualTotal(rose);
    imgValor.src = './assets/rose.png';
    resposta.innerHTML = `Quantidade: ${rose} <br>
    Percentual: ${percentualTotal.toFixed(1)}%`;
  }
});

finalizarBtn.addEventListener('click', () => {
  if (escolhaDoVinho.value !== 'selecione') {
    imgValor.src = './assets/adegaQQTech.png';
    resposta.innerHTML = `Consulta Finalizada`;
  }
});
