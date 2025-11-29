//Evento que mostra o conteúdo na tela de acordo com a escolha do usuário:

const select = document.getElementById('inputType');
const formCampoTexto = document.getElementById('formCampoTexto');
const tabela = document.getElementById('tabela');
const cards = document.getElementById('cards');
const botaoAdd = document.getElementById('btnAdicionar');
const botaoLimparTabela = document.getElementById('btnlimparTabela');
const botaoLimparCampoTexto = document.getElementById('btnlimparCampoTexto');
const mt = document.getElementById('mt');
const medidaTexto = document.getElementById('medidaTexto');

select.addEventListener('change', function () {
  if (this.value === 'tabela') {
    tabela.style.display = 'table';
    botaoAdd.style.display = 'inline-block';
    botaoLimparTabela.style.display = 'inline-block';
    botaoLimparCampoTexto.style.display = 'none';
    formCampoTexto.style.display = 'none';
    cards.style.display = 'flex';
    mt.style.display = 'block';
    medidaTexto.style.display = 'none';
  } else if (this.value === 'campoTexto') {
    formCampoTexto.style.display = 'block';
    botaoAdd.style.display = 'none';
    botaoLimparTabela.style.display = 'none';
    botaoLimparCampoTexto.style.display = 'inline-block';
    tabela.style.display = 'none';
    cards.style.display = 'flex';
    mt.style.display = 'none';
    medidaTexto.style.display = 'block';
  } else {
    // Nenhuma opção selecionada
    tabela.style.display = 'none';
    botaoAdd.style.display = 'none';
    botaoLimparTabela.style.display = 'none';
    botaoLimparCampoTexto.style.display = 'none';
    formCampoTexto.style.display = 'none';
    cards.style.display = 'none';
    mt.style.display = 'none';
    medidaTexto.style.display = 'none';
  }
});


//Função que percorre e atualiza todas as linhas da tabela:

function atualizarLinha(elemento) {
  const linhas = document.querySelectorAll("#tabela tbody tr");
  let facAnt = 0;

  linhas.forEach((linha, index) => {
    const xiInput = linha.querySelector(".xi");
    const fiInput = linha.querySelector(".fi");
    const facInput = linha.querySelector(".fac");

    //Pega o valor de xi e fi, se for vazio ou inválido utiliza-se o 0:
    const xi = parseFloat(xiInput.value) || 0;
    let fi = parseFloat(fiInput.value);
    let fac = parseFloat(facInput.value);

    //Aqui identificamos qual campo foi alterado pelo usuário:
    //Verificamos se o elemento (campo que disparou o evento) tem a classe .fi ou .fac.
    const campoAlterado = elemento.classList.contains("fi") ? "fi" : (elemento.classList.contains("fac") ? "fac" : "");

    if (campoAlterado === "fi") {
      fi = isNaN(fi) ? 0 : fi; //Verificamos se Fi é válido. Se não, usamos 0.
      fac = facAnt + fi;
      facInput.value = fac;
    }
    else if (campoAlterado === "fac") {
      fac = isNaN(fac) ? 0 : fac; //Verificamos se Fac é válido. Se não, usamos 0.
      fi = fac - facAnt;
      fi = fi < 0 ? 0 : fi; //Evita número negativo
      fiInput.value = fi;
    }

    //Atualizamos facAnt para a próxima linha do loop.
    //Ele é igual ao Fac da linha atual.
    //Isso é essencial para que a próxima linha possa calcular corretamente o novo Fac ou Fi.
    facAnt = parseFloat(facInput.value) || 0;
  });
}



//Função que adiciona uma nova linha na tabela:

function adicionarLinha() {
  const tbody = document.querySelector("#tabela tbody");

  //Cria um nova linha no HTML:
  const novaLinha = document.createElement("tr");

  //Insere os campos necessários na nova linha:
  novaLinha.innerHTML = `
    <td><input type="number" step="any" class="xi" oninput="atualizarLinha(this)"></td>
    <td><input type="number" step="any" class="fi" oninput="atualizarLinha(this)"></td>
    <td><input type="number" step="any" class="fac" oninput="atualizarLinha(this)"></td>
  `;

  //Insere a nova linha no final da tabela:
  tbody.appendChild(novaLinha);
}

//Função que limpa todos os dados da tabela:

function limparTabela(event) {
  event.preventDefault();
  const tbody = document.querySelector("#tabela tbody");

  // Limpa todas as linhas da tabela:
  tbody.innerHTML = "";

  //Adiciona uma linha vazia novamente:
  const linhaInicial = document.createElement("tr");
  linhaInicial.innerHTML = `
    <td><input type="number" step="any" class="xi" oninput="atualizarLinha(this)"></td>
    <td><input type="number" step="any" class="fi" oninput="atualizarLinha(this)"></td>
    <td><input type="number" step="any" class="fac" oninput="atualizarLinha(this)"></td>
  `;

  const campoMedida = document.getElementById("medidaTabela");

  if (campoMedida) campoMedida.value = "";


  tbody.appendChild(linhaInicial);

  // Limpa os resultados dos cálculos:
  const resultadoMedia = document.getElementById("mediaResultado");
  const resultadoMediana = document.getElementById("medianaResultado");
  const resultadoModa = document.getElementById("modaResultado");
  const resultadoVariancia = document.getElementById("varianciaResultado");
  const resultadoDesvioPadrao = document.getElementById("desvioPadraoResultado");
  const resultadoCoefiVariacao = document.getElementById("coefvarResultado");

  if (resultadoMedia) resultadoMedia.textContent = "";
  if (resultadoMediana) resultadoMediana.textContent = "";
  if (resultadoModa) resultadoModa.textContent = "";
  if (resultadoVariancia) resultadoVariancia.textContent = "";
  if (resultadoDesvioPadrao) resultadoDesvioPadrao.textContent = "";
  if (resultadoCoefiVariacao) resultadoCoefiVariacao.textContent = "";
}



function limparCampoTexto(event) {
  event.preventDefault();
  const campoValores = document.getElementById("valores");
  const campoMedida = document.getElementById("medidaTexto");

  if (campoValores) campoValores.value = "";
  if (campoMedida) campoMedida.value = "";

  const resultadoMedia = document.getElementById("mediaResultado");
  const resultadoMediana = document.getElementById("medianaResultado");
  const resultadoModa = document.getElementById("modaResultado");
  const resultadoVariancia = document.getElementById("varianciaResultado");
  const resultadoDesvioPadrao = document.getElementById("desvioPadraoResultado");
  const resultadoCoefiVariacao = document.getElementById("coefvarResultado");

  if (resultadoMedia) resultadoMedia.textContent = "";
  if (resultadoMediana) resultadoMediana.textContent = "";
  if (resultadoModa) resultadoModa.textContent = "";
  if (resultadoVariancia) resultadoVariancia.textContent = "";
  if (resultadoDesvioPadrao) resultadoDesvioPadrao.textContent = "";
  if (resultadoCoefiVariacao) resultadoCoefiVariacao.textContent = "";

  const resultado = document.getElementById("resultado");
  if (resultado) resultado.textContent = "";
}



//Funções para calcular e exibir a média:

function calcularMedia() {
  const tipo = document.getElementById("inputType").value;

  let somaXiFi = 0;  //Acumulador de Xi × Fi
  let totalFi = 0;  //Total de Fi (último Fac)
  let xiArray = [];
  let fiArray = [];

  // Verifica se os dados vem do campo de texto ou da tabela:

  if (tipo === "campoTexto") {
    let numeros = document.getElementById("valores").value
      .split(",")          // Separa por vírgula
      .map(s => s.trim())  // Remove espaços
      .filter(s => s !== "") // Remove strings vazias
      .map(Number)      // Transforma em números
      .filter(n => !isNaN(n));  // Remove valores não numéricos

    if (numeros.length === 0) return null;

    for (let i = 0; i < numeros.length; i++) {
      let valor = numeros[i];

      if (!xiArray.includes(valor)) {
        xiArray.push(valor);

        let cont = 0;
        for (let j = 0; j < numeros.length; j++) {
          if (numeros[j] === valor) cont++;
        }

        fiArray.push(cont);
      }
    }

    for (let i = 0; i < xiArray.length; i++) {
      somaXiFi += xiArray[i] * fiArray[i];
      totalFi += fiArray[i];
    }

  } else {
    const linhas = document.querySelectorAll("#tabela tbody tr");

    linhas.forEach((linha) => {
      const xi = parseFloat(linha.querySelector(".xi")?.value) || 0;
      const fi = parseFloat(linha.querySelector(".fi")?.value) || 0;

      somaXiFi += xi * fi;
      totalFi += fi;
    });

    if (totalFi === 0) return null;
  }

  const media = somaXiFi / totalFi;

  return media;
}

function exibirMedia() {
  const media = calcularMedia()
  const resultadoElemento = document.getElementById("mediaResultado");
  const tipo = document.getElementById("inputType").value;

  let medida = "";

  if (tipo === "campoTexto") {
    medida = document.getElementById("medidaTexto").value.trim();
  } else {
    medida = document.getElementById("medidaTabela").value.trim();
  }

  if (media === null) {
    resultadoElemento.textContent = "Não foi possível calcular a média: total de Fi é zero.";
    return null;
  }

  if (medida.length === 0) {
    resultadoElemento.innerHTML = `Média: ${media.toFixed(2)}`;
  } else {
    if (medida === "R$" || medida === "$") {
      resultadoElemento.innerHTML = `Média: ${medida}${media.toFixed(2)}`;
    } else {
      resultadoElemento.innerHTML = `Média: ${media.toFixed(2)} ${medida}`;
    }
  }

  return media;
}



//Função para calcular a moda:

function calcularModa() {
  const tipo = document.getElementById("inputType").value;
  const resultadoElemento = document.getElementById("modaResultado");

  let modas = []; //Armazena os valores das modas
  let frequencias = []; //Armazena todos os valores de frequência (fi) dos dados que estão sendo analisados.
  let maiorFi = -1;
  let medida = "";

  if (tipo === "campoTexto") {
    let numeros = document.getElementById("valores").value

      .split(",")          // Separa por vírgula
      .map(s => s.trim())  // Remove espaços
      .filter(s => s !== "") // Remove strings vazias
      .map(Number)      // Transforma em números
      .filter(n => !isNaN(n));  // Remove valores não numéricos

    if (numeros.length === 0) {
      resultadoElemento.textContent = "Não foi possível calcular a moda.";
      return [];
    }

    let xiArray = [];
    let fiArray = [];

    medida = document.getElementById("medidaTexto").value
    
    // Monta xiArray e fiArray:
    for (let i = 0; i < numeros.length; i++) {
      let valor = numeros[i];

      if (!xiArray.includes(valor)) {
        xiArray.push(valor);

        let cont = 0;
        for (let j = 0; j < numeros.length; j++) {
          if (numeros[j] === valor) cont++;
        }

        fiArray.push(cont);

        // Atualiza maior frequência:
        if (cont > maiorFi) {
          maiorFi = cont;
        }
      }
    }

    // Verifica se é amodal:
    const amodal = fiArray.every(fi => fi === fiArray[0]);

    //Se a distribuição for amodal (todos os Fi são iguais):
    if (amodal) {
      resultadoElemento.textContent = "Amostra amodal.";
      //Retorna um array vazio, pois uma distribuição amodal não tem moda:
      return [];
    }

    // Encontra modas
    for (let i = 0; i < fiArray.length; i++) {
      if (fiArray[i] === maiorFi) {
        modas.push(xiArray[i]);
      }
    }
  } else {

    const linhas = document.querySelectorAll("#tabela tbody tr");
    medida = document.getElementById("medidaTabela").value

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

    //Caso não haja dados para calcular a moda (array de frequências vazio):
    if (frequencias.length === 0) {
      resultadoElemento.textContent = "Não foi possível calcular a moda.";
      return [];
    }

    //Verifica se todos os Fi são iguais (caso amodal)
    //Verificando se todos os elementos do array frequencias são iguais ao primeiro elemento:
    const amodal = frequencias.every((fi) => fi === frequencias[0]); //every() é um método de array que retorna true somente se todos os elementos satisfizerem a condição dada.

    //Se a distribuição for amodal (todos os Fi são iguais):
    if (amodal) {
      resultadoElemento.textContent = "Amostra amodal.";
      //Retorna um array vazio, pois uma distribuição amodal não tem moda:
      return [];
    }

    //Se não for amodal, pega todos os Xi que possuem o maior Fi:
    linhas.forEach((linha) => {
      const xi = parseFloat(linha.querySelector(".xi")?.value);
      const fi = parseFloat(linha.querySelector(".fi")?.value);

      //Se o valor de Fi da linha percorrida for igual ao maiorFi pega o valor de Xi daquela linha e insere na array modas[]:
      if (!isNaN(xi) && fi === maiorFi) {
        modas.push(xi);
      }
    });
  }

  if (medida.length === 0) {
    if (modas.length === 1) {
      resultadoElemento.textContent = `Moda: ${modas[0]}`;
    } else {
      resultadoElemento.textContent = `Modas: ${modas.join(", ")}`;
    }
  } else if (medida === "R$" || medida === "$") {
    if (modas.length === 1) {
      resultadoElemento.textContent = `Moda: ${medida}${modas[0]}`;
    } else {
      resultadoElemento.textContent = `Modas: ${medida}${modas.join(", " + medida +"")}`;
    }
  } else {
    if (modas.length === 1) {
      resultadoElemento.textContent = `Moda: ${modas[0]} ${medida}`;
    } else {
      resultadoElemento.textContent = `Modas: ${modas.map(r => `${r} ${medida}`).join(", ")}`;
    }
  }
  return modas;
}

//Função para calcular a mediana:

function calcularMediana() {
  const tipo = document.getElementById("inputType").value;
  let dados = [];
  let medida = "";

  if (tipo === "campoTexto") {
    medida = document.getElementById("medidaTexto").value.trim();
    let numeros = document.getElementById("valores").value
      .split(",")          // separa por vírgula
      .map(Number);       // transforma em números

    numeros.forEach((numero) => {
      dados.push(numero);
    });
  } else {
    medida = document.getElementById("medidaTabela").value.trim();
    const linhas = document.querySelectorAll("#tabela tbody tr");

    linhas.forEach((linha) => {
      const xi = parseFloat(linha.querySelector(".xi")?.value);
      const fi = parseFloat(linha.querySelector(".fi")?.value);

      //Adiciona os dados no vetor(xi) de acordo com a quantidade de vezes em que se repete(fi)
      if (!isNaN(xi) && !isNaN(fi) && fi > 0) {
        for (let i = 0; i < fi; i++) {
          dados.push(xi);
        }
      }
    });
  }

  if (dados.length === 0) {
    document.getElementById("medianaResultado").textContent = "Não foi possível calcular a mediana.";
    return null;
  }

  // Ordena em ordem crescente
  dados.sort(function (a, b) {
    return a - b;
  });

  // Math.floor arredonda para 2 casas decimais
  const meio = Math.floor(dados.length / 2);
  let mediana;

  if (dados.length % 2 === 0) {
    // Caso par
    mediana = (dados[meio - 1] + dados[meio]) / 2;
  } else {
    // Caso ímpar
    mediana = dados[meio];
  }

  const resultadoElemento = document.getElementById("medianaResultado");

  if (medida.length === 0) {
    resultadoElemento.textContent = `Mediana: ${mediana.toFixed(2)}`;
  } else {
    if (medida === "R$" || medida === "$") {
      resultadoElemento.innerHTML = `Mediana: ${medida}${mediana.toFixed(2)}`;
    } else {
      resultadoElemento.innerHTML = `Mediana: ${mediana.toFixed(2)} ${medida}`;
    }
  }

  return mediana;
}

//Funções para calcular e exibir a variância:

function calcularVariancia() {
  const tipo = document.getElementById("inputType").value;
  const media = calcularMedia();

  let somaQuadrados = 0;
  let somaFi = 0;

  if (media === null) return null;

  if (tipo === "campoTexto") {
    let numeros = document.getElementById("valores").value
      .split(",")          // separa por vírgula
      .map(n => parseFloat(n.trim())) // transforma em número
      .filter(n => !isNaN(n)); // remove inválidos

    numeros.forEach((numero) => {
      somaQuadrados += Math.pow(numero - media, 2); // aqui fi = 1
      somaFi += 1;
    });

  } else {
    const linhas = document.querySelectorAll("#tabela tbody tr");

    linhas.forEach((linha) => {
      const xi = parseFloat(linha.querySelector(".xi")?.value) || 0;
      const fi = parseFloat(linha.querySelector(".fi")?.value) || 0;

      somaQuadrados += Math.pow(xi - media, 2) * fi;
      somaFi += fi;
    });
  }

  if (somaFi === 0) return null;

  const variancia = somaQuadrados / (somaFi - 1);
  return variancia;
}


function exibirVariancia() {
  const variancia = calcularVariancia();
  const resultadoElemento = document.getElementById("varianciaResultado");
  const tipo = document.getElementById("inputType").value;

  let medida = "";

  if (tipo === "campoTexto") {
    medida = document.getElementById("medidaTexto").value.trim();
  } else {
    medida = document.getElementById("medidaTabela").value.trim();
  }

  if (variancia === null) {
    resultadoElemento.textContent = "Não foi possível calcular a variância.";
    return null;
  }

  if (medida.length === 0) {
    resultadoElemento.textContent = `Variância: ${variancia.toFixed(2)}`;
  } else {
    if (medida === "R$" || medida === "$") {
      resultadoElemento.innerHTML = `Variância: ${medida}²${variancia.toFixed(2)}`;
    } else if (medida.length >= 3) {  
      resultadoElemento.textContent = `Variância: ${variancia.toFixed(2)} (${medida})²`;
    } else {
      resultadoElemento.innerHTML = `Variância: ${variancia.toFixed(2)} ${medida}²`;
    }
  }
  return variancia;
}

//Funções para calcular e exibir o desvio padrão:

function calcularDesvioPadrao() {
  const variancia = calcularVariancia();

  if (variancia === null || variancia === 0) return null;

  const desvioPadrao = Math.sqrt(variancia);
  return desvioPadrao;
}

function exibirDesvioPadrao() {
  const desvioPadrao = calcularDesvioPadrao();
  const resultadoElemento = document.getElementById("desvioPadraoResultado");
  const tipo = document.getElementById("inputType").value;

  let medida = "";

  if (tipo === "campoTexto") {
    medida = document.getElementById("medidaTexto").value.trim();
  } else {
    medida = document.getElementById("medidaTabela").value.trim();
  }

  if (desvioPadrao === null) {
    resultadoElemento.textContent = "Não foi possível calcular o desvio padrão.";
    return null;
  }

  if (medida.length === 0) {
    resultadoElemento.textContent = `Desvio Padrão: ${desvioPadrao.toFixed(2)}`;
  } else {
    if (medida === "R$" || medida === "$") {
      resultadoElemento.innerHTML = `Desvio Padrão: ${medida} ${desvioPadrao.toFixed(2)} `;
    } else {
      resultadoElemento.innerHTML = `Desvio Padrão: ${desvioPadrao.toFixed(2)} ${medida}`;
    }
  }

  return desvioPadrao;
}



//Função para calcular o coeficiente de variação:

function calcularCoeficienteVariacao() {
  const desvioPadrao = calcularDesvioPadrao();
  const media = calcularMedia();

  const resultadoElemento = document.getElementById("coefvarResultado");

  if (media === null || media === 0 || desvioPadrao === null || desvioPadrao === 0) {
    resultadoElemento.textContent = "Não foi possível calcular o coeficiente de variação.";
    return null;
  }

  const coefvar = (desvioPadrao.toFixed(2) * 100) / media.toFixed(2);

  resultadoElemento.textContent = `Coeficiente de Variação: ${coefvar.toFixed(2)}%`;

  return coefvar;
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



document.getElementById('inputType').addEventListener('change', function() {
    const selectedValue = this.value;
    const cardButtons = document.querySelectorAll('.card-body button');

    if (selectedValue) {
        cardButtons.forEach(button => button.style.display = 'inline-block');
    } else {
        cardButtons.forEach(button => button.style.display = 'none');
    }

    // Show specific form based on selection
    if (selectedValue === 'tabela') {
        document.getElementById('tabela').style.display = 'table';
        document.getElementById('mt').style.display = 'block';
        document.getElementById('formCampoTexto').style.display = 'none';
    } else if (selectedValue === 'campoTexto') {
        document.getElementById('formCampoTexto').style.display = 'block';
        document.getElementById('tabela').style.display = 'none';
        document.getElementById('mt').style.display = 'none';
    } else {
        document.getElementById('tabela').style.display = 'none';
        document.getElementById('formCampoTexto').style.display = 'none';
        document.getElementById('mt').style.display = 'none';
    }
});

// Hide buttons initially when the page loads
window.onload = function() {
    const cardButtons = document.querySelectorAll('.card-body button');
    cardButtons.forEach(button => button.style.display = 'none');
};