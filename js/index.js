const escolhaDoVinho = document.getElementById('escolha-Vinhos');
const resposta = document.querySelector('.resposta');
const imgValor = document.querySelector('.img-Valor');

escolhaDoVinho.addEventListener('change', function () {
  let tinto = 50;
  let branco = 200;
  let rose = 800;
  let valorTotalDeVinhos = tinto + branco + rose;

  let valorDaEscolha = escolhaDoVinho.value;

  if (valorDaEscolha === 'selecione') {
    imgValor.src = './assets/adegaQQTech.png';
    resposta.innerHTML = `Escolha uma opção de vinho para verificar o seu estoque`;
  } else if (valorDaEscolha === 'tinto') {
    let percentualTinto = (tinto * 100) / valorTotalDeVinhos;
    imgValor.src = './assets/tinto.png';
    resposta.innerHTML = `Quantidade: ${tinto} <br>
    Percentual: ${percentualTinto.toFixed(1)}%`;
  } else if (valorDaEscolha === 'branco') {
    let percentualBranco = (branco * 100) / valorTotalDeVinhos;
    imgValor.src = './assets/branco.png';
    resposta.innerHTML = `Quantidade: ${branco} <br>
    Percentual: ${percentualBranco.toFixed(1)}%`;
  } else if (valorDaEscolha === 'rose') {
    let percentualRose = (rose * 100) / valorTotalDeVinhos;
    imgValor.src = './assets/rose.png';
    resposta.innerHTML = `Quantidade: ${rose} <br>
    Percentual: ${percentualRose.toFixed(1)}%`;
  } else {
    imgValor.src = './assets/adegaQQTech.png';
    resposta.innerHTML = `Consulta Finalizada.`;
  }
});
