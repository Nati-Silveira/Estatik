const select = document.getElementById('inputType');
const formCampoTexto = document.getElementById('formCampoTexto');
const botaoLimpar = document.getElementById('btnlimpar');
const botaoLimparExp = document.getElementById('btnlimparExp');
const cardsDistrUniforme = document.getElementById('cardsDistrUniforme');
const cardsDistrExponencial = document.getElementById('cardsDistrExponencial');
const cardsDistrNormal = document.getElementById('cardsDistrNormal');
const d1 = document.getElementById("DistribuiçãoUni");
const d2 = document.getElementById("DistribuiçãoExpo");
const d3 = document.getElementById("DistribuiçãoNorm");
const cardcalculo = document.getElementById("cardcalculo");
const cardExpo = document.getElementById("cardProbExpo");
const cardProb = document.getElementById("cardProbi");
const cardProbNormal = document.getElementById("cardProbNormal");
const selectDistribNormal = document.getElementById('inputTypeDistribNormal');

select.addEventListener('change', function () {
  if (this.value === 'DistUni') {
    botaoLimpar.style.display = 'inline-block';
    botaoLimparExp.style.display = 'none';
    formCampoTexto.style.display = 'flex';
    cardsDistrUniforme.style.display = 'flex';
    cardsDistrExponencial.style.display = 'none';
    cardsDistrNormal.style.display = 'none';
    cardcalculo.style.display = 'none';
    d1.style.display = 'block';
    d2.style.display = 'none';
    d3.style.display = 'none';
    cardExpo.style.display = 'none';
    cardProb.style.display = 'flex';
    cardProbNormal.style.display = 'none';
    selectDistribNormal.style.display = 'none';
    paramEstatisticos.style.display = 'none';
    cardmedia.style.display = 'none';
    carddp.style.display = 'none';
    cardtamamostra.style.display = 'none';
    cardmediana.style.display = 'none';
    cardmoda.style.display = 'none';
    cardmodabruta.style.display = 'none';
    cardmodaczuber.style.display = 'none';
    dadosListados.style.display = 'none';
    tabAgrupDisc.style.display = 'none';
    tabAgrupClass.style.display = 'none';
    btnTabela1.style.display = 'none';
    btnTabela2.style.display = 'none';
    escolha2.style.display = 'none';
    escolha3.style.display = 'none';
  } else if (this.value === 'DistExp') {
    botaoLimpar.style.display = 'none';
    botaoLimparExp.style.display = 'inline-block';
    formCampoTexto.style.display = 'block';
    cardsDistrUniforme.style.display = 'none';
    cardsDistrExponencial.style.display = 'flex';
    cardsDistrNormal.style.display = 'none';
    cardcalculo.style.display = 'none';
    d1.style.display = 'none';
    d2.style.display = 'block';
    d3.style.display = 'none';
    cardExpo.style.display = 'flex';
    cardProb.style.display = 'none';
    cardProbNormal.style.display = 'none';
    selectDistribNormal.style.display = 'none';
    paramEstatisticos.style.display = 'none';
    cardmedia.style.display = 'none';
    carddp.style.display = 'none';
    cardtamamostra.style.display = 'none';
    cardmediana.style.display = 'none';
    cardmoda.style.display = 'none';
    cardmodabruta.style.display = 'none';
    cardmodaczuber.style.display = 'none';
    dadosListados.style.display = 'none';
    tabAgrupDisc.style.display = 'none';
    tabAgrupClass.style.display = 'none';
    btnTabela1.style.display = 'none';
    btnTabela2.style.display = 'none';
    escolha2.style.display = 'none';
    escolha3.style.display = 'none';
  } else if (this.value === 'DistNorm') {
    formCampoTexto.style.display = 'block';
    botaoLimpar.style.display = 'inline-block';
    cardsDistrUniforme.style.display = 'none';
    cardsDistrExponencial.style.display = 'none';
    cardsDistrNormal.style.display = 'none';
    cardcalculo.style.display = 'block';
    d1.style.display = 'none';
    d2.style.display = 'none';
    d3.style.display = 'block';
    cardExpo.style.display = 'none';
    cardProb.style.display = 'none';
    cardProbNormal.style.display = 'none';
    selectDistribNormal.style.display = 'block';
    paramEstatisticos.style.display = 'none';
    cardmedia.style.display = 'none';
    carddp.style.display = 'none';
    cardtamamostra.style.display = 'none';
    cardmediana.style.display = 'none';
    cardmoda.style.display = 'none';
    cardmodabruta.style.display = 'none';
    cardmodaczuber.style.display = 'none';
    dadosListados.style.display = 'none';
    tabAgrupDisc.style.display = 'none';
    tabAgrupClass.style.display = 'none';
    btnTabela1.style.display = 'none';
    btnTabela2.style.display = 'none';
    escolha2.style.display = 'none';
    escolha3.style.display = 'none';
  } else {
    // Nenhuma opção selecionada
    botaoLimpar.style.display = 'none';
    botaoLimparExp.style.display = 'none';
    formCampoTexto.style.display = 'none';
    cardcalculo.style.display = 'none';
    d1.style.display = 'none';
    d2.style.display = 'none';
    d3.style.display = 'none';
    cardExpo.style.display = 'none';
    cardProb.style.display = 'none';
    cardProbNormal.style.display = 'none';
    paramEstatisticos.style.display = 'none';
    cardmedia.style.display = 'none';
    carddp.style.display = 'none';
    cardtamamostra.style.display = 'none';
    cardmediana.style.display = 'none';
    cardmoda.style.display = 'none';
    cardmodabruta.style.display = 'none';
    cardmodaczuber.style.display = 'none';
    dadosListados.style.display = 'none';
    tabAgrupDisc.style.display = 'none';
    tabAgrupClass.style.display = 'none';
    btnTabela1.style.display = 'none';
    btnTabela2.style.display = 'none';
    escolha2.style.display = 'none';
    escolha3.style.display = 'none';
  }
});


function limparBotao(event) {
  event.preventDefault();
  const campoa = document.getElementById("a");
  const campob = document.getElementById("b");
  const campoa2 = document.getElementById("a2");
  const campob2 = document.getElementById("b2");
  const campoc = document.getElementById("c");
  const campod = document.getElementById("d");
  const media = document.getElementById("media");
  const camposinal = document.getElementById("sinal");
  const camposinal2 = document.getElementById("sinal2");
  const camposinalDistrExpo = document.getElementById("sinalDistrExpo");
  const camposinal2DistrExpo = document.getElementById("sinal2DistrExpo");

  if (campoa) campoa.value = "";
  if (campob) campob.value = "";
  if (campoa2) campoa2.value = "";
  if (campob2) campob2.value = "";
  if (campoc) campoc.value = "";
  if (campod) campod.value = "";
  if (media) media.value = "";
  if (camposinal) camposinal.value = "";
  if (camposinal2) camposinal2.value = "";
  if (camposinalDistrExpo) camposinalDistrExpo.value = "";
  if (camposinal2DistrExpo) camposinal2DistrExpo.value = "";


  const resultadoMediaUni = document.getElementById("mediauniResultado");
  const resultadoVarianciaUni = document.getElementById("varianciauniResultado");
  const resultadoDesvioPadraoUni = document.getElementById("desvioPadraouniResultado");
  const resultadoCoefiVariacaoUni = document.getElementById("coefvaruniResultado");
  const resultadoProbabilidade = document.getElementById("probResultado");
  const resultadoProbabilidadeExpo = document.getElementById("probExpoResultado");

  if (resultadoMediaUni) resultadoMediaUni.textContent = "";
  if (resultadoVarianciaUni) resultadoVarianciaUni.textContent = "";
  if (resultadoDesvioPadraoUni) resultadoDesvioPadraoUni.textContent = "";
  if (resultadoCoefiVariacaoUni) resultadoCoefiVariacaoUni.textContent = "";
  if (resultadoProbabilidade) resultadoProbabilidade.textContent = "";
  if (resultadoProbabilidadeExpo) resultadoProbabilidadeExpo.textContent = "";

  const resultado = document.getElementById("resultado");
  if (resultado) resultado.textContent = "";
}

function calcularMediaUni() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  if (isNaN(a) || isNaN(b)) return null;
  return (a + b) / 2;
}

function exibirMediaUni() {
  const mediauni = calcularMediaUni();
  const resultadoElemento = document.getElementById("mediauniResultado");

  if (mediauni === null) {
    resultadoElemento.textContent = "Não foi possível calcular a média";
    return;
  } else {
    resultadoElemento.textContent = `Média: ${mediauni.toFixed(2)}`;
  }
}

function calcularVarianciaUni() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  if (isNaN(a) || isNaN(b)) return null;
  return Math.pow(b - a, 2) / 12;
}

function exibirVarianciaUni() {
  const varianciauni = calcularVarianciaUni();
  const resultadoElemento = document.getElementById("varianciauniResultado");

  if (varianciauni === null) {
    resultadoElemento.textContent = "Não foi possível calcular a variância.";
    return;
  } else {
    resultadoElemento.textContent = `Variância: ${varianciauni.toFixed(2)}`;
  }
}

function calcularDesvioPadraoUni() {
  const varianciauni = calcularVarianciaUni();
  if (varianciauni === null) return null;
  return Math.sqrt(varianciauni);
}

function exibirDesvioPadraoUni() {
  const desvioPadraouni = calcularDesvioPadraoUni();
  const resultadoElemento = document.getElementById("desvioPadraouniResultado");

  if (desvioPadraouni === null) {
    resultadoElemento.textContent = "Não foi possível calcular o desvio padrão.";
    return;
  } else {
    resultadoElemento.textContent = `Desvio Padrão: ${desvioPadraouni.toFixed(2)}`;
  }
}

function calcularCoeficienteVariacaoUni() {
  const desvioPadraouni = calcularDesvioPadraoUni();
  const mediauni = calcularMediaUni();
  const resultadoElemento = document.getElementById("coefvaruniResultado");

  if (!mediauni || !desvioPadraouni) {
    resultadoElemento.textContent = "Não foi possível calcular o coeficiente de variação.";
    return null;
  }

  const coefvaruni = (desvioPadraouni.toFixed(2) * 100) / mediauni.toFixed(2);
  resultadoElemento.textContent = `Coeficiente de Variação: ${coefvaruni.toFixed(2)}%`;
  return coefvaruni;
}

function calcularProbabilidade() {
  const sinal2 = document.getElementById("sinal2").value;
  const sinal = document.getElementById("sinal").value;
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const d = parseFloat(document.getElementById("d").value);
  const resultadoElemento = document.getElementById("probResultado");


  let probabilidade;

  if (sinal2 === "igual") {
    resultadoElemento.textContent = 'A probabilidade é igual a 0%';
    probabilidade = 0;
  } else if ((sinal === "menor" || sinal === "menorIgual") && (sinal2 === "menor2" || sinal2 === "menorIgual2")) {
    probabilidade = 100 * (d - c) / (b - a);
    resultadoElemento.textContent = `A probabilidade é igual a: ${probabilidade.toFixed(2)}%`;
  } else if (sinal2 === "menor2" || sinal2 === "menorIgual2") {
    probabilidade = 100 * (d - a) / (b - a);
    resultadoElemento.textContent = `A probabilidade é igual a: ${probabilidade.toFixed(2)}%`;
  } else {
    probabilidade = 100 * (b - d) / (b - a);
    resultadoElemento.textContent = `A probabilidade é igual a: ${probabilidade.toFixed(2)}%`;
  }

  return probabilidade;

}

function calcularExponencial() {
  const sinal = document.getElementById("sinalDistrExpo").value;
  const sinal2 = document.getElementById("sinal2DistrExpo").value;
  const a = parseFloat(document.getElementById("a2").value);
  const b = parseFloat(document.getElementById("b2").value);
  const media = parseFloat(document.getElementById("media").value);
  const resultadoElemento = document.getElementById("probExpoResultado");
  const lambda = 1 / media;

  let probabilidadeExpo;

  if (sinal2 === "igualDistrExpo") {
    resultadoElemento.textContent = 'A probabilidade é igual a 0%';
    probabilidadeExpo = 0;
  } else if ((sinal === "menorDistrExpo" || sinal === "menorIgualDistrExpo") && (sinal2 === "menor2DistrExpo" || sinal2 === "menorIgual2DistrExpo")) {
    probabilidadeExpo = (100 * (Math.exp(-lambda * a))) - (100 * (Math.exp(-lambda * b)));
    resultadoElemento.textContent = `A probabilidade exponencial é igual a: ${probabilidadeExpo.toFixed(2)}%`;
  } else if (sinal2 === "menor2DistrExpo" || sinal2 === "menorIgual2DistrExpo") {
    probabilidadeExpo = 100 * (1 - Math.exp(-lambda * b));
    resultadoElemento.textContent = `A probabilidade exponencial é igual a: ${probabilidadeExpo.toFixed(2)}%`;
  } else {
    probabilidadeExpo = 100 * Math.exp(-lambda * b);
    resultadoElemento.textContent = `A probabilidade exponencial é igual a: ${probabilidadeExpo.toFixed(2)}%`;
  }

  return probabilidadeExpo;

}


//Distribuição normal
const selectDistrNormal = document.getElementById('inputTypeDistribNormal');
const limparbotaoTexto = document.getElementById('btnlimparCampoTexto')
const limparNormal = document.getElementById('btnlimparNormal')
const cardNormal = document.getElementById('cardProbNormal');
const cardmedia = document.getElementById('cardmedia');
const carddp = document.getElementById('carddp');
const cardtamamostra = document.getElementById('cardtamamostra');
const cardmediana = document.getElementById('cardmediana');
const cardmoda = document.getElementById('cardmoda');
const cardmodabruta = document.getElementById('cardmodabruta');
const cardmodaczuber = document.getElementById('cardmodaczuber');
const paramEstatisticos = document.getElementById('paramEstatisticos');
const dadosListados = document.getElementById('dadosListados');
const tabAgrupDisc = document.getElementById('tabelaAgrupDiscreto');
const tabAgrupClass = document.getElementById('tabelaAgrupClasses');
const btnTabela1 = document.getElementById('botoesTabela1');
const btnTabela2 = document.getElementById('botoesTabela2');
const escolha2 = document.getElementById('escolha2');
const escolha3 = document.getElementById('escolha3');


//Evento que mostra o conteúdo na tela de acordo com a escolha do usuário:
selectDistrNormal.addEventListener('change', function () {
  if (this.value === 'paramEstatisticos') {
    paramEstatisticos.style.display = 'block';
    limparbotaoTexto.style.display = 'none'
    limparNormal.style.display = 'inline-block'
    cardNormal.style.display = 'flex';
    cardmedia.style.display = 'none';
    carddp.style.display = 'none';
    cardtamamostra.style.display = 'none';
    cardmediana.style.display = 'none';
    cardmoda.style.display = 'none';
    cardmodabruta.style.display = 'none';
    cardmodaczuber.style.display = 'none';
    dadosListados.style.display = 'none';
    tabAgrupDisc.style.display = 'none';
    tabAgrupClass.style.display = 'none';
    btnTabela1.style.display = 'none';
    btnTabela2.style.display = 'none';
    escolha2.style.display = 'none';
    escolha3.style.display = 'none';
  } else if (this.value === 'dadosListados') {
    paramEstatisticos.style.display = 'none';
    limparbotaoTexto.style.display = 'inline-block'
    limparNormal.style.display = 'none'
    cardNormal.style.display = 'flex';
    cardmedia.style.display = 'block';
    carddp.style.display = 'block';
    cardtamamostra.style.display = 'block';
    cardmediana.style.display = 'block';
    cardmoda.style.display = 'block';
    cardmodabruta.style.display = 'none';
    cardmodaczuber.style.display = 'none';
    dadosListados.style.display = 'block';
    tabAgrupDisc.style.display = 'none';
    tabAgrupClass.style.display = 'none';
    btnTabela1.style.display = 'none';
    btnTabela2.style.display = 'none';
    escolha2.style.display = 'none';
    escolha3.style.display = 'none';
  } else if (this.value === 'tabelaAgrupDiscreto') {
    paramEstatisticos.style.display = 'none';
    limparbotaoTexto.style.display = 'none'
    limparNormal.style.display = 'none'
    cardNormal.style.display = 'flex';
    cardmedia.style.display = 'block';
    carddp.style.display = 'block';
    cardtamamostra.style.display = 'block';
    cardmediana.style.display = 'block';
    cardmoda.style.display = 'block';
    cardmodabruta.style.display = 'none';
    cardmodaczuber.style.display = 'none';
    dadosListados.style.display = 'none';
    tabAgrupDisc.style.display = 'block';
    tabAgrupClass.style.display = 'none';
    btnTabela1.style.display = 'flex';
    btnTabela2.style.display = 'none';
    escolha2.style.display = 'flex';
    escolha3.style.display = 'none';
    document.getElementById('btnAdicionarDisc').style.display = 'flex';
    document.getElementById('btnlimparTabelaDisc').style.display = 'flex';
  } else if (this.value === 'tabelaAgrupClasses') {
    paramEstatisticos.style.display = 'none';
    limparbotaoTexto.style.display = 'none'
    limparNormal.style.display = 'none'
    cardNormal.style.display = 'flex';
    cardmedia.style.display = 'block';
    carddp.style.display = 'block';
    cardtamamostra.style.display = 'block';
    cardmediana.style.display = 'block';
    cardmoda.style.display = 'none';
    cardmodabruta.style.display = 'block';
    cardmodaczuber.style.display = 'block';
    dadosListados.style.display = 'none';
    tabAgrupDisc.style.display = 'none';
    tabAgrupClass.style.display = 'block';
    btnTabela1.style.display = 'none';
    btnTabela2.style.display = 'flex';
    escolha2.style.display = 'none';
    escolha3.style.display = 'flex';
    document.getElementById('btnAdicionarClass').style.display = 'flex';
    document.getElementById('btnlimparTabelaClass').style.display = 'flex';
  }
  else {
    paramEstatisticos.style.display = 'none';
    limparbotaoTexto.style.display = 'none'
    cardNormal.style.display = 'none';
    cardmedia.style.display = 'none';
    carddp.style.display = 'none';
    cardtamamostra.style.display = 'none';
    cardmediana.style.display = 'none';
    cardmoda.style.display = 'none';
    cardmodabruta.style.display = 'none';
    cardmodaczuber.style.display = 'none';
    dadosListados.style.display = 'none';
    tabAgrupDisc.style.display = 'none';
    tabAgrupClass.style.display = 'none';
    btnTabela1.style.display = 'none';
    btnTabela2.style.display = 'none';
    escolha2.style.display = 'none';
    escolha3.style.display = 'none';
  }
});

function calcularDistribNormalParametros() {
  const tamanhoAmostra = parseFloat(document.getElementById('tamanhoAmostra').value);
  const valorMedia = parseFloat(document.getElementById('valorMedia').value);
  const valorDesvioPadrao = parseFloat(document.getElementById('valorDesvioPadrao').value);
  const a = parseFloat(document.getElementById('aDistrNormal').value);
  const b = parseFloat(document.getElementById('bDistrNormal').value);
  const sinal1 = document.getElementById('sinalDistrNormal').value;
  const sinal2 = document.getElementById('sinal2DistrNormal').value;
  const resultado = document.getElementById('probNormalResultado');

  // Teste no console
  console.log(tamanhoAmostra, valorMedia, valorDesvioPadrao, a, b);

  if (isNaN(tamanhoAmostra) || isNaN(valorMedia) || isNaN(valorDesvioPadrao)) {
    resultado.textContent = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  // Transforma o valor x em z:
  function calcularZ(x) {
    return (((x - valorMedia) * Math.sqrt(tamanhoAmostra)) / valorDesvioPadrao).toFixed(2);
  }

  // Probabilidade acumulada à esquerda:
  function calculaValorTabZ(z) {
    return (jStat.normal.cdf(z, 0, 1)).toFixed(4);
  }

  let probDistribNormal = null;

  // Quando só B é preenchido:
  if (isNaN(a) && !isNaN(b) && sinal2 !== "") {
    const z = calcularZ(b);
    const tabZ = calculaValorTabZ(z);
    console.log(tabZ);
    console.log(z);

    // Se for "maior", pegamos a área à direita
    if (sinal2 === "maiorDistrNormal" || sinal2 === "maiorIgualDistrNormal") {
      probDistribNormal = 1 - tabZ;
    }
    // Se for "menor", pegamos a área à esquerda
    else if (sinal2 === "menor2DistrNormal" || sinal2 === "menorIgual2DistrNormal") {
      probDistribNormal = tabZ;
    }
    // Se for "igual", probabilidade = 0
    else if (sinal2 === "igualDistrNormal") {
      probDistribNormal = 0;
    }
  }
  //A e B preenchidos:
  else if (!isNaN(a) && !isNaN(b) && sinal2 !== "") {
    const zA = parseFloat(calcularZ(a));
    const zB = parseFloat(calcularZ(b));
    const tabZA = calculaValorTabZ(zA);
    const tabZB = calculaValorTabZ(zB);

    if ((sinal1 === "menorDistrNormal" || sinal1 === "menorIgualDistrNormal") && (sinal2 === "menor2DistrNormal" || sinal2 === "menorIgual2DistrNormal")) {
      probDistribNormal = tabZB - tabZA;
    }
  }

  resultado.textContent = `${(probDistribNormal * 100).toFixed(2)} %`;
}

//Função que adiciona uma nova linha na tabela:

function atualizarLinha(elemento) {
  const tabelaDiscreta = document.getElementById("tabelaAgrupDiscreto");
  const tabelaClasses = document.getElementById("tabelaAgrupClasses");

  let linhas;
  let facAnt = 0;

  if (tabelaClasses.style.display === "block") {
    linhas = tabelaClasses.querySelectorAll("tbody tr");

    // Calcula h baseado na primeira linha, para preencher LI e LS automaticamente
    const primeiraLinha = linhas[0];
    const primeiroLI = parseFloat(primeiraLinha.querySelector(".li")?.value);
    const primeiroLS = parseFloat(primeiraLinha.querySelector(".ls")?.value);
    let h = (!isNaN(primeiroLI) && !isNaN(primeiroLS)) ? primeiroLS - primeiroLI : 0;

    linhas.forEach((linha, index) => {
      const liInput = linha.querySelector(".li");
      const lsInput = linha.querySelector(".ls");
      const fiInput = linha.querySelector(".fi");
      const facInput = linha.querySelector(".fac");
      const pmiInput = linha.querySelector(".pmi");

      let li = parseFloat(liInput.value);
      let ls = parseFloat(lsInput.value);
      let fi = parseFloat(fiInput.value);
      let fac = parseFloat(facInput.value);

      const campoAlterado = elemento.classList.contains("fi") ? "fi" :
        (elemento.classList.contains("fac") ? "fac" :
          (elemento.classList.contains("li") ? "li" :
            (elemento.classList.contains("ls") ? "ls" :
              (elemento.classList.contains("pmi") ? "pmi" : ""))));

      // Preencher automaticamente LI e LS
      if (index > 0 && h > 0) {
        const linhaAnterior = linhas[index - 1];
        const lsAnterior = parseFloat(linhaAnterior.querySelector(".ls")?.value);
        li = lsAnterior;
        ls = li + h;
        liInput.value = li;
        lsInput.value = ls;
      }

      // Calcular Fi e Fac
      if (campoAlterado === "fi") {
        fi = isNaN(fi) ? 0 : fi;
        fac = facAnt + fi;
        facInput.value = fac;
      } else if (campoAlterado === "fac") {
        fac = isNaN(fac) ? 0 : fac;
        fi = fac - facAnt;
        fi = fi < 0 ? 0 : fi;
        fiInput.value = fi;
      }
      // Calcular PMi (Ponto Médio da classe)
      if (!isNaN(li) && !isNaN(ls)) {
        const novoPmi = (li + ls) / 2;
        pmiInput.value = novoPmi.toFixed(2);
      }

      facAnt = parseFloat(facInput.value) || 0;
    });

  } else if (tabelaDiscreta.style.display === "block") {
    linhas = tabelaDiscreta.querySelectorAll("tbody tr");
    facAnt = 0;

    linhas.forEach(linha => {
      const xiInput = linha.querySelector(".xi");
      const fiInput = linha.querySelector(".fi");
      const facInput = linha.querySelector(".fac");

      let xi = parseFloat(xiInput.value);
      let fi = parseFloat(fiInput.value);
      let fac = parseFloat(facInput.value);

      const campoAlterado = elemento.classList.contains("fi") ? "fi" : (elemento.classList.contains("fac") ? "fac" : "");

      if (campoAlterado === "fi") {
        fi = isNaN(fi) ? 0 : fi;
        fac = facAnt + fi;
        facInput.value = fac;
      } else if (campoAlterado === "fac") {
        fac = isNaN(fac) ? 0 : fac;
        fi = fac - facAnt;
        fi = fi < 0 ? 0 : fi;
        fiInput.value = fi;
      }

      facAnt = parseFloat(facInput.value) || 0;
    });
  }
}

function adicionarLinha() {
  const tabelaDiscreta = document.getElementById("tabelaAgrupDiscreto");
  const tabelaClasses = document.getElementById("tabelaAgrupClasses");

  let tabelaBody;

  // Verifica qual tabela está visível
  if (tabelaClasses.style.display === "block") {
    tabelaBody = tabelaClasses.querySelector("tbody");

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td><input type="number" step="any" class="li" oninput="atualizarLinha(this)"></td>
      <td><input type="number" step="any" class="ls" oninput="atualizarLinha(this)"></td>
      <td><input type="number" step="any" class="fi" oninput="atualizarLinha(this)"></td>
      <td><input type="number" step="any" class="fac" oninput="atualizarLinha(this)"></td>
      <td><input type="number" step="any" class="pmi" oninput="atualizarLinha(this)"></td>
    `;
    tabelaBody.appendChild(novaLinha);

  } else if (tabelaDiscreta.style.display === "block") {
    tabelaBody = tabelaDiscreta.querySelector("tbody");

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td><input type="number" step="any" class="xi" oninput="atualizarLinha(this)"></td>
      <td><input type="number" step="any" class="fi" oninput="atualizarLinha(this)"></td>
      <td><input type="number" step="any" class="fac" oninput="atualizarLinha(this)"></td>
    `;
    tabelaBody.appendChild(novaLinha);
  }

  // Após adicionar a linha, chama atualizarLinha no último input da linha nova para recalcular tudo
  const inputs = tabelaBody.querySelectorAll("tr:last-child input");
  if (inputs.length > 0) {
    atualizarLinha(inputs[0]);
  }
}

function limparTabela(event) {
  event.preventDefault();

  const tabelaDiscreta = document.getElementById("tabelaAgrupDiscreto");
  const tabelaClasses = document.getElementById("tabelaAgrupClasses");
  let tabelaBody;

  if (tabelaClasses.style.display === "block") {
    tabelaBody = tabelaClasses.querySelector("tbody");
    tabelaBody.innerHTML = `
      <tr>
        <td><input type="number" step="any" class="li" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="ls" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="fi" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="fac" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="pmi" oninput="atualizarLinha(this)"></td>
      </tr>
    `;
  } else {
    tabelaBody = tabelaDiscreta.querySelector("tbody");
    tabelaBody.innerHTML = `
      <tr>
        <td><input type="number" step="any" class="xi" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="fi" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="fac" oninput="atualizarLinha(this)"></td>
      </tr>
    `;
  }

  // Limpa os resultados dos cálculos:
  ["mediaResultado", "medianaResultado", "modaResultado", "desvioPadraoResultado", "tamamostraResultado", "medianaResultado", "modaResultado", "modabrutaResultado", "modaczuberResultado", 'probNormalResultado'].forEach(id => {
    const elemento = document.getElementById(id);
    const sinaltab = document.getElementById('sinaltab');
    const sinalclass = document.getElementById('sinalclass');
    if (sinaltab) sinaltab.selectedIndex = 0;
    if (sinalclass) sinalclass.selectedIndex = 0;
    if (elemento) elemento.textContent = "";
  });
}

function limparCampoTexto(event) {
  event.preventDefault();

  // Campos de entrada
  const campoValores = document.getElementById("valores");
  const tamanhoAmostra = document.getElementById("tamanhoAmostra");
  const valorMedia = document.getElementById("valorMedia");
  const valorDesvioPadrao = document.getElementById("valorDesvioPadrao");
  const aDistrNormal = document.getElementById("aDistrNormal");
  const bDistrNormal = document.getElementById("bDistrNormal");

  // Selects
  const sinalDistrNormal = document.getElementById("sinalDistrNormal");
  const sinal2DistrNormal = document.getElementById("sinal2DistrNormal");
  const sinalNormal = document.getElementById("sinalNormal");

  // Resultados
  const resultadoMedia = document.getElementById("mediaResultado");
  const resultadoMediana = document.getElementById("medianaResultado");
  const resultadoModa = document.getElementById("modaResultado");
  const resultadotamamostra = document.getElementById("tamamostraResultado");
  const resultadoDesvioPadrao = document.getElementById("desvioPadraoResultado");
  const resultadoprobNormal = document.getElementById("probNormalResultado");
  const resultado = document.getElementById("resultado");

  // Limpa os campos de input
  if (campoValores) campoValores.value = "";
  if (tamanhoAmostra) tamanhoAmostra.value = "";
  if (valorMedia) valorMedia.value = "";
  if (valorDesvioPadrao) valorDesvioPadrao.value = "";
  if (aDistrNormal) aDistrNormal.value = "";
  if (bDistrNormal) bDistrNormal.value = "";

  // Reseta selects
  if (sinalDistrNormal) sinalDistrNormal.selectedIndex = 0;
  if (sinal2DistrNormal) sinal2DistrNormal.selectedIndex = 0;
  if (sinalNormal) sinalNormal.selectedIndex = 0;

  // Limpa resultados de texto
  if (resultadoMedia) resultadoMedia.textContent = "";
  if (resultadoMediana) resultadoMediana.textContent = "";
  if (resultadoModa) resultadoModa.textContent = "";
  if (resultadotamamostra) resultadotamamostra.textContent = "";
  if (resultadoDesvioPadrao) resultadoDesvioPadrao.textContent = "";
  if (resultadoprobNormal) resultadoprobNormal.textContent = "";
  if (resultado) resultado.textContent = "";
}




//Funções para calcular e exibir a média:

function calcularMedia() {
  const tipo = document.getElementById("inputTypeDistribNormal").value;

  if (tipo === "dadosListados") {
    let numeros = document.getElementById("valores").value
      .split(",")
      .map(s => s.trim())
      .filter(s => s !== "")
      .map(Number)
      .filter(n => !isNaN(n));

    if (numeros.length === 0) return null;

    let xiArray = [];
    let fiArray = [];

    numeros.forEach(valor => {
      if (!xiArray.includes(valor)) {
        xiArray.push(valor);
        const cont = numeros.filter(v => v === valor).length;
        fiArray.push(cont);
      }
    });

    let somaXiFi = 0;
    let totalFi = 0;

    for (let i = 0; i < xiArray.length; i++) {
      somaXiFi += xiArray[i] * fiArray[i];
      totalFi += fiArray[i];
    }

    if (totalFi === 0) return null;
    return somaXiFi / totalFi;

  } else if (tipo === "tabelaAgrupDiscreto") {
    if (document.getElementById("tabelaAgrupDiscreto").style.display === "block") {
      const linhas = document.querySelectorAll("#tabelaAgrupDiscreto tbody tr");

      let somaXiFi = 0;
      let totalFi = 0;

      linhas.forEach(linha => {
        const xi = parseFloat(linha.querySelector(".xi")?.value) || 0;
        const fi = parseFloat(linha.querySelector(".fi")?.value) || 0;

        somaXiFi += xi * fi;
        totalFi += fi;
      });

      if (totalFi === 0) return null;

      return somaXiFi / totalFi;
    } else {
      return null;
    }
  } else if (tipo === "tabelaAgrupClasses") {
    const linhas = document.querySelectorAll("#tabelaAgrupClasses tbody tr");

    let somaPmiFi = 0;
    let totalFi = 0;

    linhas.forEach(linha => {
      const pmi = parseFloat(linha.querySelector(".pmi")?.value) || 0;
      const fi = parseFloat(linha.querySelector(".fi")?.value) || 0;

      somaPmiFi += pmi * fi;
      totalFi += fi;
    });

    if (totalFi === 0) return null;

    return somaPmiFi / totalFi;
  }

  return null; // caso tipo não reconhecido
}

function exibirMedia() {
  const media = calcularMedia();
  const resultadoElemento = document.getElementById("mediaResultado");

  if (!resultadoElemento) return null;

  if (isNaN(media)) {
    resultadoElemento.textContent = "—";
  } else {
    resultadoElemento.textContent = `Média: ${media.toFixed(2)}`;
  }

  return media;
}

//Função para calcular a moda:

function calcularModa() {
  const tipo = document.getElementById("inputTypeDistribNormal").value;
  const resultadoElemento = document.getElementById("modaResultado");

  let modas = [];
  let maiorFi = -Infinity;


  if (tipo === "dadosListados") {
    let numeros = document.getElementById("valores").value
      .split(",")
      .map(s => s.trim())
      .filter(s => s !== "")
      .map(Number)
      .filter(n => !isNaN(n));

    if (numeros.length === 0) {
      resultadoElemento.textContent = "Não foi possível calcular a moda.";
      return [];
    }

    let xiArray = [];
    let fiArray = [];

    // Conta as ocorrências de cada número (frequência)
    for (let valor of numeros) {
      const index = xiArray.indexOf(valor);
      if (index === -1) {
        xiArray.push(valor);
        fiArray.push(1);
      } else {
        fiArray[index]++;
      }
    }

    maiorFi = Math.max(...fiArray);

    // Caso amodal (todas as frequências iguais)
    const amodal = fiArray.every(fi => fi === fiArray[0]);
    if (amodal) {
      resultadoElemento.textContent = "Amostra amodal.";
      return [];
    }

    // Encontra todas as modas (pode haver mais de uma)
    modas = xiArray.filter((_, i) => fiArray[i] === maiorFi);
  }


  else if (document.getElementById("tabelaAgrupDiscreto").style.display === "block") {
    const linhas = document.querySelectorAll("#tabelaAgrupDiscreto tbody tr");
    let frequencias = [];

    linhas.forEach(linha => {
      const xi = parseFloat(linha.querySelector(".xi")?.value);
      const fi = parseFloat(linha.querySelector(".fi")?.value);

      if (!isNaN(xi) && !isNaN(fi)) {
        frequencias.push(fi);
        if (fi > maiorFi) maiorFi = fi;
      }
    });

    // Caso tabela esteja vazia
    if (frequencias.length === 0) {
      resultadoElemento.textContent = "Não foi possível calcular a moda.";
      return [];
    }

    // Caso amodal
    const amodal = frequencias.every(fi => fi === frequencias[0]);
    if (amodal) {
      resultadoElemento.textContent = "Amostra amodal.";
      return [];
    }

    // Encontra todas as modas (pode haver mais de uma)
    linhas.forEach(linha => {
      const xi = parseFloat(linha.querySelector(".xi")?.value);
      const fi = parseFloat(linha.querySelector(".fi")?.value);

      if (!isNaN(xi) && fi === maiorFi) {
        modas.push(xi);
      }
    });
  }


  if (modas.length === 0) {
    resultadoElemento.textContent = "Não foi possível calcular a moda.";
  } else if (modas.length === 1) {
    resultadoElemento.textContent = `Moda: ${modas[0]}`;
  } else {
    resultadoElemento.textContent = `Modas: ${modas.join(", ")}`;
  }

  return modas;
}

function calcularModaBruta() {
  let modas = [];
  let frequencias = [];
  let maiorFi = -1;

  const linhas = document.querySelectorAll("#tabelaAgrupClasses tbody tr");

  //Armazena as frequências e encontra a maior Fi:
  linhas.forEach((linha) => {
    const fi = parseFloat(linha.querySelector(".fi")?.value);
    if (!isNaN(fi)) {
      frequencias.push(fi); //Adiciona a frequência ao array de frequências
      if (fi > maiorFi) {
        maiorFi = fi; //Atualiza o maior Fi encontrado
      }
    }
  });

  const amodal = frequencias.every((fi) => fi === frequencias[0]);

  if (amodal) {
    resultadoElemento.textContent = "Amostra amodal.";
    return [];
  }

  linhas.forEach((linha) => {
    const pmi = parseFloat(linha.querySelector(".pmi")?.value);
    const fi = parseFloat(linha.querySelector(".fi")?.value);

    if (!isNaN(pmi) && fi === maiorFi) {
      modas.push(pmi);
    }
  });

  const resultadoElemento = document.getElementById("modabrutaResultado");

  if (modas.length === 1) {
    resultadoElemento.textContent = `Moda bruta: ${modas[0]}`;
  } else {
    resultadoElemento.textContent = `Modas brutas: ${modas.join(", ")}`;
  }

  return modas;
}

function calcularModaCzuber() {
  const linhas = document.querySelectorAll("#tabelaAgrupClasses tbody tr");
  const modabruta = calcularModaBruta();
  const resultadoElemento = document.getElementById("modaczuberResultado");

  if (!modabruta || modabruta.length === 0) {
    resultadoElemento.textContent = "Não foi possível calcular a moda de Czuber.";
    return null;
  }

  let resultados = [];

  for (let moda of modabruta) {
    let linhaModal;
    linhas.forEach((linha) => {
      const pmi = parseFloat(linha.querySelector(".pmi")?.value);
      if (pmi === moda) {
        linhaModal = linha;
      }
    });

    if (!linhaModal) continue;

    const li = parseFloat(linhaModal.querySelector(".li")?.value);
    const ls = parseFloat(linhaModal.querySelector(".ls")?.value);
    const fi = parseFloat(linhaModal.querySelector(".fi")?.value);

    const indexModal = Array.from(linhas).indexOf(linhaModal);
    const fiAnt = indexModal > 0 ? parseFloat(linhas[indexModal - 1].querySelector(".fi")?.value) : 0;
    const fiPost = indexModal < linhas.length - 1 ? parseFloat(linhas[indexModal + 1].querySelector(".fi")?.value) : 0;

    if ([li, ls, fi, fiAnt, fiPost].some(isNaN)) continue;

    const h = ls - li;
    const moc = li + ((fi - fiAnt) / (2 * fi - fiAnt - fiPost)) * h;

    resultados.push(parseFloat(moc.toFixed(2)));
  }

  if (resultados.length === 0) {
    resultadoElemento.textContent = "Não foi possível calcular a moda de Czuber.";
    return null;
  } else if (resultados.length === 1) {
    resultadoElemento.textContent = `Moda de Czuber: ${resultados[0]}`;
  } else {
    resultadoElemento.textContent = `Modas de Czuber: ${resultados.join(", ")}`;
  }

  return resultados; // retorna todos os valores
}


//Função para calcular a mediana:

function calcularMediana() {
  const tipo = document.getElementById("inputTypeDistribNormal").value;
  const resultadoElemento = document.getElementById("medianaResultado");
  let dados = [];

  if (tipo === "dadosListados") {
    let numeros = document.getElementById("valores").value
      .split(",")
      .map(s => s.trim())
      .filter(s => s !== "")
      .map(Number)
      .filter(n => !isNaN(n));

    if (numeros.length === 0) {
      resultadoElemento.textContent = "Não foi possível calcular a mediana.";
      return null;
    }

    dados = numeros;
  }

  else if (tipo === "tabelaAgrupDiscreto") {
    if (document.getElementById("tabelaAgrupDiscreto").style.display === "block") {
      const linhas = document.querySelectorAll("#tabelaAgrupDiscreto tbody tr");

      linhas.forEach(linha => {
        const xi = parseFloat(linha.querySelector(".xi")?.value);
        const fi = parseFloat(linha.querySelector(".fi")?.value);

        // Adiciona xi repetido fi vezes no array de dados
        if (!isNaN(xi) && !isNaN(fi) && fi > 0) {
          for (let i = 0; i < fi; i++) {
            dados.push(xi);
          }
        }
      });

      if (dados.length === 0) {
        resultadoElemento.textContent = "Não foi possível calcular a mediana.";
        return null;
      }

    }
  }

  else if (tipo === "tabelaAgrupClasses") {
    const linhas = document.querySelectorAll("#tabelaAgrupClasses tbody tr");

    linhas.forEach(linha => {
      const pmi = parseFloat(linha.querySelector(".pmi")?.value);
      const fi = parseFloat(linha.querySelector(".fi")?.value);

      // Adiciona o ponto médio repetido conforme sua frequência
      if (!isNaN(pmi) && !isNaN(fi) && fi > 0) {
        for (let i = 0; i < fi; i++) {
          dados.push(pmi);
        }
      }
    });

    if (dados.length === 0) {
      resultadoElemento.textContent = "Não foi possível calcular a mediana.";
      return null;
    }

    // Ordena os dados
    dados.sort((a, b) => a - b);

    // Cálculo da mediana para classes usando interpolação
    let facAcumulado = 0;
    let classeMediana = null;
    let facAnt = 0;
    const meio = dados.length / 2;

    for (const linha of linhas) {
      const li = parseFloat(linha.querySelector(".li")?.value);
      const ls = parseFloat(linha.querySelector(".ls")?.value);
      const fi = parseFloat(linha.querySelector(".fi")?.value);

      if (!isNaN(li) && !isNaN(ls) && !isNaN(fi) && fi > 0) {
        facAcumulado += fi;
        if (facAcumulado >= meio) {
          classeMediana = { li, ls, fi };
          facAnt = facAcumulado - fi;
          break;
        }
      }
    }

    const h = classeMediana.ls - classeMediana.li;
    const mediana = classeMediana.li + ((meio - facAnt) / classeMediana.fi) * h;

    resultadoElemento.textContent = `Mediana: ${mediana.toFixed(2)}`;

    return mediana;
  }

  dados.sort((a, b) => a - b);
  const n = dados.length;
  const meio = Math.floor(n / 2);
  let mediana;

  if (n % 2 === 0) {
    mediana = (dados[meio - 1] + dados[meio]) / 2;
  } else {
    mediana = dados[meio];
  }

  resultadoElemento.textContent = `Mediana: ${mediana.toFixed(2)}`;
  return mediana;
}



//Funções para calcular e exibir a variância:

function calcularVariancia() {
  const tipo = document.getElementById("inputTypeDistribNormal").value;
  const media = calcularMedia(); // usa a média já calculada
  const resultadoElemento = document.getElementById("desvioPadraoResultado");

  if (media === null || isNaN(media)) {
    resultadoElemento.textContent = "Não foi possível calcular a variância.";
    return null;
  }

  let somaQuadrados = 0;
  let totalFi = 0;

  if (tipo === "dadosListados") {
    let numeros = document.getElementById("valores").value
      .split(",")
      .map(s => s.trim())
      .filter(s => s !== "")
      .map(Number)
      .filter(n => !isNaN(n));

    if (numeros.length === 0) {
      resultadoElemento.textContent = "Nenhum dado válido encontrado.";
      return null;
    }

    numeros.forEach(numero => {
      somaQuadrados += Math.pow(numero - media, 2);
      totalFi += 1;
    });

  } else if (tipo === "tabelaAgrupDiscreto") {
    if (document.getElementById("tabelaAgrupDiscreto").style.display === "block") {
      const linhas = document.querySelectorAll("#tabelaAgrupDiscreto tbody tr");

      linhas.forEach(linha => {
        const xi = parseFloat(linha.querySelector(".xi")?.value) || 0;
        const fi = parseFloat(linha.querySelector(".fi")?.value) || 0;

        somaQuadrados += Math.pow(xi - media, 2) * fi;
        totalFi += fi;
      });

    }

  } else if (tipo === "tabelaAgrupClasses") {
    const linhas = document.querySelectorAll("#tabelaAgrupClasses tbody tr");

    linhas.forEach(linha => {
      const pmi = parseFloat(linha.querySelector(".pmi")?.value) || 0; // ponto médio da classe
      const fi = parseFloat(linha.querySelector(".fi")?.value) || 0;

      somaQuadrados += Math.pow(pmi - media, 2) * fi;
      totalFi += fi;
    });

  }

  if (totalFi === 0) {
    resultadoElemento.textContent = "Não foi possível calcular a variância.";
    return null;
  }

  // Cálculo da variância amostral
  const variancia = somaQuadrados / (totalFi - 1);

  return variancia;
}

//Funções para calcular e exibir o desvio padrão:

function calcularDesvioPadrao() {
  const tipo = document.getElementById("inputTypeDistribNormal").value;
  const media = calcularMedia();
  const resultadoElemento = document.getElementById("desvioPadraoResultado");

  if (media === null || isNaN(media)) {
    resultadoElemento.textContent = "Não foi possível calcular o desvio padrão.";
    return null;
  }

  let somaQuadrados = 0;
  let totalFi = 0;

  if (tipo === "dadosListados") {
    let numeros = document.getElementById("valores").value
      .split(",")
      .map(s => s.trim())
      .filter(s => s !== "")
      .map(Number)
      .filter(n => !isNaN(n));

    if (numeros.length === 0) {
      resultadoElemento.textContent = "Nenhum dado válido encontrado.";
      return null;
    }

    numeros.forEach(numero => {
      somaQuadrados += Math.pow(numero - media, 2);
      totalFi += 1;
    });

  } else if (tipo === "tabelaAgrupDiscreto") {
    if (document.getElementById("tabelaAgrupDiscreto").style.display === "block") {
      const linhas = document.querySelectorAll("#tabelaAgrupDiscreto tbody tr");

      linhas.forEach(linha => {
        const xi = parseFloat(linha.querySelector(".xi")?.value) || 0;
        const fi = parseFloat(linha.querySelector(".fi")?.value) || 0;

        somaQuadrados += Math.pow(xi - media, 2) * fi;
        totalFi += fi;
      });
    }

  } else if (tipo === "tabelaAgrupClasses") {
    const linhas = document.querySelectorAll("#tabelaAgrupClasses tbody tr");

    linhas.forEach(linha => {
      const pmi = parseFloat(linha.querySelector(".pmi")?.value) || 0;
      const fi = parseFloat(linha.querySelector(".fi")?.value) || 0;

      somaQuadrados += Math.pow(pmi - media, 2) * fi;
      totalFi += fi;
    });

  }

  if (totalFi === 0) {
    resultadoElemento.textContent = "Não foi possível calcular o desvio padrão.";
    return null;
  }

  const variancia = somaQuadrados / (totalFi - 1);
  const desvioPadrao = Math.sqrt(variancia);

  return desvioPadrao;
}

function exibirDesvioPadrao() {
  const desvioPadrao = calcularDesvioPadrao();
  const resultadoElemento = document.getElementById("desvioPadraoResultado");
  if (!resultadoElemento) return null;

  if (isNaN(desvioPadrao)) {
    resultadoElemento.textContent = "Desvio Padrão: —";
  } else {
    resultadoElemento.textContent = `Desvio Padrão: ${desvioPadrao.toFixed(2)}`;
  }
}

function tamamostra() {
  const tipo = document.getElementById("inputTypeDistribNormal").value;
  let somaFi = 0;

  if (tipo === "dadosListados") {
    // Quando o usuário digita valores diretamente
    const numeros = document.getElementById("valores").value
      .split(",")
      .map(s => parseFloat(s.trim()))
      .filter(n => !isNaN(n));

    somaFi = numeros.length;
  } else {
    // Quando há tabela (dados agrupados)
    let linhas;

    if (document.getElementById("tabelaAgrupDiscreto").style.display === "block") {
      linhas = document.querySelectorAll("#tabelaAgrupDiscreto tbody tr");
    } else if (document.getElementById("tabelaAgrupClasses").style.display === "block") {
      linhas = document.querySelectorAll("#tabelaAgrupClasses tbody tr");
    }

    linhas.forEach(linha => {
      const fi = parseFloat(linha.querySelector(".fi")?.value);
      if (!isNaN(fi)) somaFi += fi;
    });
  }

  const resultadoElemento = document.getElementById("tamamostraResultado");

  if (somaFi === 0) {
    resultadoElemento.textContent = "Não foi possível calcular o tamanho da amostra.";
    return null;
  } else {
    resultadoElemento.textContent = `Tamanho da amostra: ${somaFi}`;
  }

  return somaFi;
}

function pegarDados(event) {
  event.preventDefault();
  var entrada = document.getElementById("valores").value;
  const resultado = document.getElementById("resultado");

  if (!entrada) {
    resultado.innerHTML = "Por favor, insira os valores separados por vírgula.";
    return;
  }

  // Transforma a string em array de números
  var numeros = entrada.split(",").map(function (n) {
    return parseFloat(n.trim());
  });

  // Remove NaN (se o usuário digitar algo errado)
  numeros = numeros.filter(function (n) { return !isNaN(n); });

  if (numeros.length === 0) {
    resultado.innerHTML = "Nenhum número válido encontrado.";
    return;
  }

  numeros.sort(function (a, b) { return a - b; });

  resultado.innerHTML = "Valores ordenados: " + numeros.join(", ") + "<br>";

}

// Função que recalcula todos os resultados:


document.addEventListener("DOMContentLoaded", function () {
  const inputValores = document.getElementById("valores");
  if (inputValores) {
    inputValores.addEventListener("input", exibirMedia);
    inputValores.addEventListener("input", exibirDesvioPadrao);
    inputValores.addEventListener("input", tamamostra);
    inputValores.addEventListener("input", calcularMediana);
    inputValores.addEventListener("input", calcularModa);
  }

  // Delegação para inputs na tabela discreta
  const tabelaDiscretaBody = document.querySelector("#tabelaAgrupDiscreto tbody");
  if (tabelaDiscretaBody) {
    tabelaDiscretaBody.addEventListener("input", function (event) {
      if (event.target.tagName.toLowerCase() === 'input') {
        exibirMedia();
        calcularMediana();
        calcularModa();
        exibirDesvioPadrao();
        tamamostra();
      }
    });
  }

  // Delegação para inputs na tabela classes (corrigido para id correto)
  const tabelaClassesBody = document.querySelector("#tabelaAgrupClasses tbody");
  if (tabelaClassesBody) {
    tabelaClassesBody.addEventListener("input", function (event) {
      if (event.target.tagName.toLowerCase() === 'input') {
        exibirMedia();
        calcularMediana();
        exibirDesvioPadrao();
        tamamostra();
        calcularModaCzuber();
        calcularModaBruta();
      }
    });
  }

  // Chama na carga inicial
  exibirMedia();
  calcularMediana();
  calcularModa();
  exibirDesvioPadrao();
  tamamostra();
  calcularModaCzuber();
  calcularModaBruta();
});

let valorEscolhido = null;

function calcularDistribNormal() {
  const tipo = document.getElementById('inputTypeDistribNormal').value;
  const tamanhoAmostra = tamamostra();
  const valorMedia = calcularMedia();
  const valorDesvioPadrao = calcularDesvioPadrao();
  const resultado = document.getElementById('probNormalResultado');

  let sinal = "";

  // Usa o seletor de sinal correspondente
  if (tipo === "dadosListados") {
    sinal = document.getElementById('sinalNormal').value;
  } else if (tipo === "tabelaAgrupDiscreto") {
    sinal = document.getElementById('sinaltab').value;
  } else if (tipo === "tabelaAgrupClasses") {
    sinal = document.getElementById('sinalclass').value;
  }

  //  Validações básicas
  if (isNaN(tamanhoAmostra) || isNaN(valorMedia) || isNaN(valorDesvioPadrao) || valorDesvioPadrao === 0) {
    resultado.textContent = "Amostra inválida para calcular a distribuição normal.";
    return;
  }

  if (sinal === "") {
    resultado.textContent = "Informe o sinal corretamente.";
    return;
  }

  if (valorEscolhido === null || isNaN(valorEscolhido)) {
    resultado.textContent = "Escolha a mediana ou moda para calcular.";
    return;
  }

  // Cálculo do valor Z
  function calcularZ(x) {
    return (((x - valorMedia.toFixed(2)) * Math.sqrt(tamanhoAmostra.toFixed(2))) / valorDesvioPadrao.toFixed(2)).toFixed(2);
  }

  // Calcula probabilidade acumulada normal padrão
  function calculaValorTabZ(z) {
    return (jStat.normal.cdf(z, 0, 1)).toFixed(4);
  }

  let probDistribNormal = null;

  const z = calcularZ(valorEscolhido);
  const tabZ = calculaValorTabZ(z);

  // Determina probabilidade conforme sinal
  if (sinal === "maiorNormal" || sinal === "maiorIgualNormal") {
    probDistribNormal = 1 - tabZ;
  } else if (sinal === "menorNormal" || sinal === "menorIgualNormal") {
    probDistribNormal = tabZ;
  } else if (sinal === "igualNormal") {
    probDistribNormal = 0;
  } else {
    resultado.textContent = "Sinal inválido.";
    return;
  }

  resultado.textContent = `${(probDistribNormal * 100).toFixed(2)} %`;
}


function usarModaComoB() {
  const tipo = document.getElementById('inputTypeDistribNormal').value;
  const resultado = document.getElementById('probNormalResultado');

  let moda = null;

  if (tipo === "dadosListados") {
    moda = calcularModa();
  } else if (tipo === "tabelaAgrupDiscreto") {
    moda = calcularModa();
  }

  if (moda !== null) {
    valorEscolhido = moda;
    resultado.textContent = `Valor escolhido: ${moda}`;
  } else {
    resultado.textContent = "Não foi possível calcular a moda.";
  }
}

function usarMedianaComoB() {
  const mediana = calcularMediana();
  const resultado = document.getElementById('probNormalResultado');
  if (mediana !== null) {
    valorEscolhido = mediana;
    resultado.textContent = `Valor escolhido (Mediana): ${mediana.toFixed(2)}`;
  } else {
    resultado.textContent = "Não foi possível calcular a mediana.";
  }
}

function usarModaBrutaComoB() {
  const modas = calcularModaBruta();
  const resultado = document.getElementById('probNormalResultado');

  if (modas.length > 0) {
    valorEscolhido = parseFloat(modas[0]);
    resultado.textContent = `Valor escolhido (Moda Bruta): ${modas[0]}`;
  } else {
    resultado.textContent = "Não foi possível calcular a Moda Bruta.";
  }
}

function usarModaCzuberComoB() {
  const resultado = document.getElementById('probNormalResultado');
  const mocArray = calcularModaCzuber(); // retorna um array ou null

  if (mocArray && mocArray.length > 0) {
    valorEscolhido = mocArray[0]; // pega o primeiro valor
    resultado.textContent = `Valor escolhido (Moda Czuber): ${valorEscolhido.toFixed(2)}`;
  } else {
    valorEscolhido = null; // garantir que não reste valor inválido
    resultado.textContent = "Não foi possível calcular a Moda de Czuber.";
  }
}



