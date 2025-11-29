const select = document.getElementById('inputType');
const TextoBi = document.getElementById('TextoBi');
const botaoLimparDistrBi = document.getElementById('btnlimparDistrBi');
const botaoLimparDistrPoi = document.getElementById('btnlimparDistrPoi');
const cardsBi = document.getElementById('cardBi');
const distrBi = document.getElementById("DistrBi");
const distrPoi = document.getElementById("DistrPoi");
const cardProb = document.getElementById("cardProbi");

select.addEventListener('change', function () {
  if (this.value === 'DistBi') {
    botaoLimparDistrBi.style.display = 'inline-block';
    botaoLimparDistrPoi.style.display = 'none';
    TextoBi.style.display = 'flex';
    cardsBi.style.display = 'flex';
    distrBi.style.display = 'block';
    distrPoi.style.display = 'none';
    cardProb.style.display = 'flex';
  } else if (this.value === 'DistPoi') {
    botaoLimparDistrBi.style.display = 'none';
    botaoLimparDistrPoi.style.display = 'inline-block';
    TextoBi.style.display = 'none';
    cardsBi.style.display = 'none';
    distrPoi.style.display = 'block';
    distrBi.style.display = 'none';
    cardProb.style.display = 'none';
  } else {
    // Nenhuma opção selecionada
    botaoLimparDistrBi.style.display = 'none';
    botaoLimparDistrPoi.style.display = 'none';
    TextoBi.style.display = 'none';
    distrBi.style.display = 'none';
    distrPoi.style.display = 'none';
    cardProb.style.display = 'none';
    cardsBi.style.display = 'none';
  }
});

function limparBotao(event) {
  event.preventDefault();
  const campoaBi = document.getElementById("aDistrBi");
  const campoaPoi = document.getElementById("aDistrPoi");
  const campobBi = document.getElementById("bDistrBi");
  const campobPoi = document.getElementById("bDistrPoi");
  const mediaDistrPoi = document.getElementById("mediaPoi");
  const camposinalDistrBi = document.getElementById("sinalDistrBi");
  const camposinal2DistrBi = document.getElementById("sinal2DistrBi");
  const camposinalDistrPoi = document.getElementById("sinalDistrPoi");
  const camposinal2DistrPoi = document.getElementById("sinal2DistrPoi");
  const espacoAmostralDistrBi = document.getElementById("espamost");
  const probSucessoDistrBi = document.getElementById("suc");

  if (campoaBi) campoaBi.value = "";
  if (campoaPoi) campoaPoi.value = "";
  if (campobBi) campobBi.value = "";
  if (campobPoi) campobPoi.value = "";
  if (mediaDistrPoi) mediaDistrPoi.value = "";
  if (camposinalDistrBi) camposinalDistrBi.value = "";
  if (camposinalDistrPoi) camposinalDistrPoi.value = "";
  if (camposinal2DistrBi) camposinal2DistrBi.value = "";
  if (camposinal2DistrPoi) camposinal2DistrPoi.value = "";
  if (espacoAmostralDistrBi) espacoAmostralDistrBi.value = "";
  if (probSucessoDistrBi) probSucessoDistrBi.value = "";

  const resultadoMediaBi = document.getElementById("mediaBiResultado");
  const resultadoVarianciaBi = document.getElementById("varianciaBiResultado");
  const resultadoDesvioPadraoBi = document.getElementById("desvioPadraoBiResultado");
  const resultadoCoefiVariacaoBi = document.getElementById("coefvarBiResultado");
  const resultadoProbabilidadeBi = document.getElementById("probBiResultado");

  const resultadoVarianciaPoi = document.getElementById("varianciaPoiResultado");
  const resultadoDesvioPadraoPoi = document.getElementById("desvioPadraoPoiResultado");
  const resultadoCoefiVariacaoPoi = document.getElementById("coefvarPoiResultado");
  const resultadoProbabilidadePoi = document.getElementById("probPoiResultado");

  if (resultadoMediaBi) resultadoMediaBi.textContent = "";
  if (resultadoVarianciaBi) resultadoVarianciaBi.textContent = "";
  if (resultadoDesvioPadraoBi) resultadoDesvioPadraoBi.textContent = "";
  if (resultadoCoefiVariacaoBi) resultadoCoefiVariacaoBi.textContent = "";
  if (resultadoProbabilidadeBi) resultadoProbabilidadeBi.textContent = "";

  if (resultadoVarianciaPoi) resultadoVarianciaPoi.textContent = "";
  if (resultadoDesvioPadraoPoi) resultadoDesvioPadraoPoi.textContent = "";
  if (resultadoCoefiVariacaoPoi) resultadoCoefiVariacaoPoi.textContent = "";
  if (resultadoProbabilidadePoi) resultadoProbabilidadePoi.textContent = "";

  const resultado = document.getElementById("resultado");
  if (resultado) resultado.textContent = "";
}

function calcularMediaBi() {
  let n = parseFloat(document.getElementById("espamost").value);
  let p = parseFloat(document.getElementById("suc").value);
  p = p / 100;
  if (isNaN(n) || isNaN(p)) return null;
  return n * p;
}

function exibirMediaBi() {
  const mediaBi = calcularMediaBi();
  const resultadoElemento = document.getElementById("mediaBiResultado");

  if (mediaBi === null) {
    resultadoElemento.textContent = "Não foi possível calcular a média";
    return;
  } else {
    resultadoElemento.textContent = `Média: ${mediaBi.toFixed(2)}`;
  }
}

function calcularVarianciaBi() {
  let n = parseFloat(document.getElementById("espamost").value);
  let p = parseFloat(document.getElementById("suc").value);
  p = p / 100;
  let q;
  q = 1-p;
  if (isNaN(p) || isNaN(n)) return null;
  return n * p * q;
}

function exibirVarianciaBi() {
  const varianciaBi = calcularVarianciaBi();
  const resultadoElemento = document.getElementById("varianciaBiResultado");

  if (varianciaBi === null) {
    resultadoElemento.textContent = "Não foi possível calcular a variância.";
    return;
  } else {
    resultadoElemento.textContent = `Variância: ${varianciaBi.toFixed(2)}`;
  }
}

function calcularDesvioPadraoBi() {
  const varianciaBi = calcularVarianciaBi();
  if (varianciaBi === null) return null;
  return Math.sqrt(varianciaBi);
}

function exibirDesvioPadraoBi() {
  const desvioPadraoBi = calcularDesvioPadraoBi();
  const resultadoElemento = document.getElementById("desvioPadraoBiResultado");

  if (desvioPadraoBi === null) {
    resultadoElemento.textContent = "Não foi possível calcular o desvio padrão.";
    return;
  } else {
    resultadoElemento.textContent = `Desvio Padrão: ${desvioPadraoBi.toFixed(2)}`;
  }
}

function calcularCoeficienteVariacaoBi() {
  const desvioPadraoBi = calcularDesvioPadraoBi();
  const mediaBi = calcularMediaBi();
  const resultadoElemento = document.getElementById("coefvarBiResultado");
  console.log(desvioPadraoBi)

  if (!mediaBi || !desvioPadraoBi) {
    resultadoElemento.textContent = "Não foi possível calcular o coeficiente de variação.";
    return null;
  }

  const coefvarBi = (desvioPadraoBi.toFixed(2) * 100) / mediaBi.toFixed(2);
  console.log(coefvarBi);
  resultadoElemento.textContent = `Coeficiente de Variação: ${coefvarBi.toFixed(2)}%`;
  return coefvarBi;
}

function fatorial(n) {
  if (n < 0) return 0;
  let fat = 1;
  for (let i = 2; i <= n; i++) fat *= i;
  return fat;
}

function combinacao(n, x) {
  return fatorial(n) / (fatorial(x) * fatorial(n - x));
}

function calcularProbabilidadeBi() {
  const sinalA = document.getElementById("sinalDistrBi").value;
  const a = parseInt(document.getElementById("aDistrBi").value);
  const sinalB = document.getElementById("sinal2DistrBi").value;
  const b = parseInt(document.getElementById("bDistrBi").value);
  const n = parseInt(document.getElementById("espamost").value);
  const resultadoElemento = document.getElementById("probBiResultado");

  let p = parseFloat(document.getElementById("suc").value) / 100;
  let q = 1 - p;

  // Função da probabilidade de X = x
  function probX(x) {
    return combinacao(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
  }

  // Determinar limites
  let limiteInferior, limiteSuperior;

  // Limite inferior baseado no sinal de a
  if (sinalA === "menorDistrBi") limiteInferior = a + 1;
  else if (sinalA === "menorIgualDistrBi") limiteInferior = a;
  else limiteInferior = 0;

  // Limite superior baseado no sinal de b
  switch (sinalB) {
    case "igualDistrBi":
      limiteSuperior = b;
      limiteInferior = b; // Apenas X = b
      break;
    case "menor2DistrBi":
      limiteSuperior = b - 1;
      break;
    case "menorIgual2DistrBi":
      limiteSuperior = b;
      break;
    case "maior2DistrBi":
      limiteInferior = b + 1;
      limiteSuperior = n;
      break;
    case "maiorIgual2DistrBi":
      limiteInferior = b;
      limiteSuperior = n;
      break;
  }

  // Somar probabilidades no intervalo
  let probabilidadeBi = 0;
  for (let x = limiteInferior; x <= limiteSuperior; x++) {
    let resultado = parseFloat(probX(x).toFixed(4));
    probabilidadeBi= probabilidadeBi + resultado;
  }

  probabilidadeBi = (probabilidadeBi * 100).toFixed(2);
  resultadoElemento.textContent = `A probabilidade é igual a: ${probabilidadeBi}%`;

  return probabilidadeBi;
}

function exibirVarianciaPoi(){
  const varianciaPoi = parseFloat(document.getElementById("mediaPoi").value);
  const resultadoElemento = document.getElementById("varianciaPoiResultado");
  resultadoElemento.textContent = `Variância: ${varianciaPoi.toFixed(2)}`;
}  

function calcularDesvioPadraoPoi() {
  const varianciaPoi = parseFloat(document.getElementById("mediaPoi").value);
  if (varianciaPoi === null) return null;
  return Math.sqrt(varianciaPoi);
}
  
function exibirDesvioPadraoPoi() {
  const desvioPadraoPoi = calcularDesvioPadraoPoi();
  const resultadoElemento = document.getElementById("desvioPadraoPoiResultado");

  if (desvioPadraoPoi === null) {
    resultadoElemento.textContent = "Não foi possível calcular o desvio padrão.";
    return;
  } else {
    resultadoElemento.textContent = `Desvio Padrão: ${desvioPadraoPoi.toFixed(2)}`;
    return desvioPadraoPoi;
  }
}
  
function calcularCoeficienteVariacaoPoi() {
  const mediaPoi = parseFloat(document.getElementById("mediaPoi").value);
  const desvioPadraoPoi = calcularDesvioPadraoPoi();
  const resultadoElemento = document.getElementById("coefvarPoiResultado");

  if (!mediaPoi || !desvioPadraoPoi) {
    resultadoElemento.textContent = "Não foi possível calcular o coeficiente de variação.";
    return null;
  }

  const coefvarPoi = (desvioPadraoPoi.toFixed(2) * 100) / mediaPoi.toFixed(2);
  resultadoElemento.textContent = `Coeficiente de Variação: ${coefvarPoi.toFixed(2)}%`;
  return coefvarPoi;
}
  

function calcularProbabilidadePoi() {
  const sinalA = document.getElementById("sinalDistrPoi").value;
  const a = parseInt(document.getElementById("aDistrPoi").value);
  const sinalB = document.getElementById("sinal2DistrPoi").value;
  const b = parseInt(document.getElementById("bDistrPoi").value);
  const resultadoElemento = document.getElementById("probPoiResultado");
  const lambda = parseFloat(document.getElementById("mediaPoi").value);

  // Função da probabilidade de X = x
  function probX(x) {
    return (Math.pow(lambda, x) * Math.exp(-lambda)) / fatorial(x);
  }

  // Determinar limites
  let limiteInferior, limiteSuperior;

  // Limite inferior baseado no sinal de a
  if (sinalA === "menorDistrPoi") limiteInferior = a + 1;
  else if (sinalA === "menorIgualDistrPoi") limiteInferior = a;
  else limiteInferior = 0;

  // Limite superior baseado no sinal de b
  if (sinalB === "menor2DistrPoi") limiteSuperior = b - 1; // X < b
  else if (sinalB === "menorIgual2DistrPoi") limiteSuperior = b; // X ≤ b
  else if (sinalB === "maior2DistrPoi") limiteInferior = b + 1; // X > b
  else if (sinalB === "maiorIgual2DistrPoi") limiteInferior = b; // X ≥ b
  else if (sinalB === "igualDistrPoi") {
    limiteInferior = b;
    limiteSuperior = b;
  }

  // Somar probabilidades no intervalo
  let probabilidadePoi = 0;
  // Caso o sinal de B seja "maior" (sem limite superior):
  if (sinalB === "maior2DistrPoi" || sinalB === "maiorIgual2DistrPoi") {
    // Somar até que a probabilidade se torne desprezível:
    for (let x = limiteInferior; x <= limiteInferior + 100; x++) {
      probabilidadePoi += probX(x);
    }
  } else {
    // Caso normal: intervalo fechado:
    for (let x = limiteInferior; x <= limiteSuperior; x++) {
      let resultado = parseFloat(probX(x).toFixed(4));
      probabilidadePoi = probabilidadePoi + resultado;
    }
  }
  console.log(probabilidadePoi)

  probabilidadePoi = (probabilidadePoi * 100).toFixed(2);
  resultadoElemento.textContent = `A probabilidade é igual a: ${probabilidadePoi}%`;

  return probabilidadePoi;
}