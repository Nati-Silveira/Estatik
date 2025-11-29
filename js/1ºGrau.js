function adicionarLinha() {
  const tbody = document.querySelector("#tabela tbody");

  //Cria um nova linha no HTML:
  const novaLinha = document.createElement("tr");

  //Insere os campos necessários na nova linha:
  novaLinha.innerHTML = `
    <td><input type="number" step="any" class="x" oninput="atualizarLinha(this)"></td>
    <td><input type="number" step="any" class="y" oninput="atualizarLinha(this)"></td>
  `;

  //Insere a nova linha no final da tabela:
  tbody.appendChild(novaLinha);
}
function limparTabela() {
  const tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = `
      <tr>
        <td><input type="number" step="any" class="x" oninput="atualizarLinha(this)"></td>
        <td><input type="number" step="any" class="y" oninput="atualizarLinha(this)"></td>
      </tr>
    `;

  // limpar resultados
  ["resResultado"]
    .forEach(id => document.getElementById(id).textContent = "");
}

function Soma() {
  let somax = 0;
  let somay = 0;
  let somax2 = 0;
  let somaxy = 0;

  const linhas = document.querySelectorAll("#tabela tbody tr");
  const N = linhas.length;

  linhas.forEach((linha) => {
    const x = parseFloat(linha.querySelector(".x")?.value) || 0;
    const y = parseFloat(linha.querySelector(".y")?.value) || 0;

    const x2 = x * x;
    const xy = x * y;

    somax += x;
    somay += y;
    somax2 += x2;
    somaxy += xy;

  });
  return { N, somax, somay, somax2, somaxy };
}

//Regra de Cramer
function Sistema() {
  const { N, somax, somay, somax2, somaxy } = Soma();

  const D = N * somax2 - somax * somax;  // determinante principal
  const Dx = somay * somax2 - somax * somaxy; // determinante de x
  const Dy = N * somaxy - somay * somax; // determinante de y

  const xs = Dx / D;
  const ys = Dy / D;

  return { xs, ys };
}

function Estimado() {
  const { xs, ys } = Sistema();
  let estimado = 0;
  const a = parseFloat(xs.toFixed(2));
  const b = parseFloat(ys.toFixed(2));
  const linhas = document.querySelectorAll("#tabela tbody tr");
  let estimados = [];

  linhas.forEach((linha) => {
    const x = parseFloat(linha.querySelector(".x")?.value) || 0;

    estimado = a + b * x;

    if (!isNaN(estimado)) {
      estimados.push(parseFloat((a + b * x).toFixed(2)));
    }
  });
  return estimados;
}

function VE() {
  const estimado = Estimado();
  const { N, somay } = Soma();
  let real = 0;
  real = parseFloat((somay / N).toFixed(2));
  let sub = 0;
  let VE = 0;

  sub = estimado.map(yi => parseFloat((Math.pow(yi - real, 2)).toFixed(2)));
  for (let i = 0; i < sub.length; i++) {
    VE += sub[i];
  }
  VE = parseFloat(VE.toFixed(2));
  return VE;

}

function VNE() {
  const estimado = Estimado();
  let sub2 = 0;
  let soma = 0;
  let VNE = 0;
  const linhas = document.querySelectorAll("#tabela tbody tr");

  linhas.forEach((linha, i) => {
    const y = parseFloat(linha.querySelector(".y")?.value) || 0;
    sub2 = estimado[i] - y;
    soma += parseFloat((Math.pow(sub2, 2)).toFixed(2));

    VNE = parseFloat(soma.toFixed(2));
  });
  return VNE;
}

function R2(){
  const ve = VE();
  const vne = VNE();
  let r2 = 0;
  
  r2 = parseFloat(((100 * ve) / (ve + vne)).toFixed(2));
  
  return r2;
}

function Resultado(){
  const { xs, ys } = Sistema();
  const a = parseFloat(xs.toFixed(2));
  const b = parseFloat(ys.toFixed(2));
  const r2 = R2();
  const linhas = document.querySelectorAll("#tabela tbody tr");
  const resultadoElemento = document.getElementById("resResultado");

  const x1 = parseFloat(linhas[0].querySelector(".x")?.value || 0);
  const xf = parseFloat(linhas[linhas.length - 1].querySelector(".x")?.value || 0);
 
    resultadoElemento.innerHTML = `ŷ = ${a} + ${b}x` + `<br>` + `D = [${x1}, ${xf}]` + `<br>` + `r² = ${r2}%`;

}