function atualizarLinha(elemento) {
  const linhas = document.querySelectorAll("#tabela tbody tr");
  let facAnt = 0;

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
    // Calcular PMi
    if (!isNaN(li) && !isNaN(ls)) {
      const novoPmi = (li + ls) / 2;
      pmiInput.value = novoPmi.toFixed(2);
    }

    facAnt = parseFloat(facInput.value) || 0;
  });
  
}

function adicionarLinha() {
  const tabela = document.querySelector("#tabela tbody");
  const linhas = tabela.querySelectorAll("tr");
  const ultimaLinha = linhas[linhas.length - 1];

  // pega LI e LS da última linha
  const liAnt = parseFloat(ultimaLinha.querySelector(".li")?.value);
  const lsAnt = parseFloat(ultimaLinha.querySelector(".ls")?.value);

  let novoli = "";
  let novols = "";

  if (!isNaN(liAnt) && !isNaN(lsAnt)) {
    const h = lsAnt - liAnt;   // intervalo da classe
    novoli = lsAnt;
    novols = lsAnt + h;
  }

  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
      <td><input type="number" step="any" class="li" value="${novoli}" oninput="atualizarLinha(this)"></td>
      <td><input type="number" step="any" class="ls" value="${novols}" oninput="atualizarLinha(this)"></td>
      <td><input type="number" step="any" class="fi" oninput="atualizarLinha(this)"></td>
      <td><input type="number" step="any" class="fac" oninput="atualizarLinha(this)"></td>
      <td><input type="number" step="any" class="pmi" oninput="atualizarLinha(this)"></td>
    `;

  tabela.appendChild(novaLinha);

  // já calcula o PMI automaticamente
  if (!isNaN(novoli) && !isNaN(novols)) {
    const pmi = (novoli + novols) / 2;
    novaLinha.querySelector(".pmi").value = pmi.toFixed(2);
  }
}

function limparTabela() {
  const tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = `
      <tr>
        <td><input type="number" step="any" class="li" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="ls" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="fi" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="fac" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="pmi" readonly></td>
      </tr>
    `;

  // limpar campo de unidade
  document.getElementById("medidaTabela").value = "";

  // limpar resultados
  ["mediaResultado", "medianaResultado", "modabrutaResultado", "modaczuberResultado", "varianciaResultado", "desvioPadraoResultado", "coefvarResultado"]
    .forEach(id => document.getElementById(id).textContent = "");
}

function calcularMedia() {

  let somaPmiFi = 0;  //Acumulador de Xi × Fi
  let totalFi = 0;  //Total de Fi (último Fac)

  // Verifica se os dados vem do campo de texto ou da tabela:

  const linhas = document.querySelectorAll("#tabela tbody tr");

  linhas.forEach((linha) => {
    const pmi = parseFloat(linha.querySelector(".pmi")?.value) || 0;
    const fi = parseFloat(linha.querySelector(".fi")?.value) || 0;

    somaPmiFi += pmi * fi;
    totalFi += fi;
  });

  if (totalFi === 0) return null;

  const media = somaPmiFi / totalFi;

  return media;
}

function exibirMedia() {
  const media = calcularMedia()
  const resultadoElemento = document.getElementById("mediaResultado");
  const medida = document.getElementById("medidaTabela").value.trim();

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

function calcularModaBruta() {
  let modas = [];
  let frequencias = [];
  let maiorFi = -1;

  const linhas = document.querySelectorAll("#tabela tbody tr");

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

  if (frequencias.length === 0) {
    resultadoElemento.textContent = "Não foi possível calcular a moda bruta.";
    return [];
  }

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

  return modas;
}

function exibirModaBruta() {
  const resultadoElemento = document.getElementById("modabrutaResultado");
  const modas = calcularModaBruta();
  const medida = document.getElementById("medidaTabela").value.trim();

  if (medida.length === 0) {
    if (modas.length === 1) {
      resultadoElemento.textContent = `Moda bruta: ${modas[0]}`;
    } else {
      resultadoElemento.textContent = `Modas brutas: ${modas.join(", ")}`;
    }
  } else if (medida === "R$" || medida === "$") {
    if (modas.length === 1) {
      resultadoElemento.textContent = `Moda bruta: ${medida}${modas[0]}`;
    } else {
      resultadoElemento.textContent = `Modas brutas: ${medida}${modas.join(", " + medida +"")}`;
    }
  } else {
    if (modas.length === 1) {
      resultadoElemento.textContent = `Moda bruta: ${modas[0]} ${medida}`;
    } else {
      resultadoElemento.textContent = `Modas brutas: ${modas.map(r => `${r} ${medida}`).join(", ")}`;
    }
  }

  return modas;
}

function calcularModaCzuber() {
  const linhas = document.querySelectorAll("#tabela tbody tr");
  const modabruta = calcularModaBruta();
  const resultadoElemento = document.getElementById("modaczuberResultado");

  if (modabruta.length === 0) {
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

    const h = ls - li;

    const moc = li + ((fi - fiAnt) / (2 * fi - fiAnt - fiPost)) * h;

    resultados.push(moc.toFixed(2));
  }

    const medida = document.getElementById("medidaTabela").value.trim();
    if (medida.length === 0) {
      if (resultados.length === 1) {
        resultadoElemento.textContent = `Moda de Czuber: ${resultados[0]}`;
      } else {
        resultadoElemento.textContent = `Modas de Czuber: ${resultados.join(", ")}`;
      }
    } else if (medida === "R$" || medida === "$") {
      if (resultados.length === 1) {
        resultadoElemento.textContent = `Moda de Czuber: ${medida}${resultados[0]}`;
      } else {
        resultadoElemento.textContent = `Modas de Czuber: ${medida}${resultados.join(", " + medida +"")}`;
      }
    } else {
      if (resultados.length === 1) {
        resultadoElemento.textContent = `Moda de Czuber: ${resultados[0]} ${medida}`;
      } else {
        resultadoElemento.textContent = `Modas de Czuber: ${resultados.map(r => `${r} ${medida}`).join(", ")}`;
      }
    }

    return moc;
  }

function calcularMediana() {
  let dados = [];
  const linhas = document.querySelectorAll("#tabela tbody tr");

  linhas.forEach((linha) => {
    const pmi = parseFloat(linha.querySelector(".pmi")?.value);
    const fi = parseFloat(linha.querySelector(".fi")?.value);

    //Adiciona os dados no vetor(xi) de acordo com a quantidade de vezes em que se repete(fi)
    if (!isNaN(pmi) && !isNaN(fi) && fi > 0) {
      for (let i = 0; i < fi; i++) {
        dados.push(pmi);
      }
    }
  });

  if (dados.length === 0) {
    document.getElementById("medianaResultado").textContent = "Não foi possível calcular a mediana.";
    return null;
  }

  // Ordena em ordem crescente
  dados.sort(function (a, b) {
    return a - b;
  });

  let facAcumulado = 0;
  let classeMediana;
  let facAnt = 0;

  // Math.floor arredonda para 2 casas decimais
  const meio = dados.length / 2;
  for (const linha of linhas) {
    const li = parseFloat(linha.querySelector(".li")?.value);
    const ls = parseFloat(linha.querySelector(".ls")?.value);
    const fi = parseFloat(linha.querySelector(".fi")?.value);

    if (!isNaN(li) && !isNaN(ls) && !isNaN(fi) && fi > 0) {
      facAcumulado += fi;

      if (facAcumulado >= meio) {
        // Encontrou a classe da mediana
        classeMediana = { li, ls, fi };
        facAnt = facAcumulado - fi; // frequência acumulada anterior
        break;
      }
    }
  }

  if (!classeMediana) {
    document.getElementById("medianaResultado").textContent = "Não foi possível identificar a classe da mediana.";
    return null;
  }

  const h = classeMediana.ls - classeMediana.li;
  const mediana = classeMediana.li + ((meio - facAnt) / classeMediana.fi) * h;

  const resultadoElemento = document.getElementById("medianaResultado");
  const medida = document.getElementById("medidaTabela").value.trim();

  if (medida.length === 0) {
    resultadoElemento.textContent = `Mediana: ${mediana.toFixed(2)}`;
  } else if (medida === "R$" || medida === "$") {
    resultadoElemento.textContent = `Mediana: ${medida}${mediana.toFixed(2)}`;
  } else {
    resultadoElemento.textContent = `Mediana: ${mediana.toFixed(2)} ${medida}`;
  }

  return mediana;
}

function calcularVariancia() {
  const media = calcularMedia();

  let somaQuadrados = 0;
  let somaFi = 0;

  if (media === null) return null;

  const linhas = document.querySelectorAll("#tabela tbody tr");

  linhas.forEach((linha) => {
    const pmi = parseFloat(linha.querySelector(".pmi")?.value) || 0;
    const fi = parseFloat(linha.querySelector(".fi")?.value) || 0;

    somaQuadrados += Math.pow(pmi - media, 2) * fi;
    somaFi += fi;
  });

  if (somaFi === 0) return null;

  const variancia = somaQuadrados / (somaFi - 1);
  return variancia;
}

function exibirVariancia() {
  const variancia = calcularVariancia();
  const resultadoElemento = document.getElementById("varianciaResultado");
  const medida = document.getElementById("medidaTabela").value.trim();

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
    }else {
      resultadoElemento.innerHTML = `Variância: ${variancia.toFixed(2)} ${medida}²`;
    }
  }
  return variancia;
}

function calcularDesvioPadrao() {
  const variancia = calcularVariancia();

  if (variancia === null || variancia === 0) return null;

  const desvioPadrao = Math.sqrt(variancia);
  return desvioPadrao;
}

function exibirDesvioPadrao() {
  const desvioPadrao = calcularDesvioPadrao();
  const resultadoElemento = document.getElementById("desvioPadraoResultado");
  const medida = document.getElementById("medidaTabela").value.trim();

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
}
