# Estatik - Calculadora de Estatística Aplicada

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Capa do projeto" title="Site" src="img/logo-estatik-comFundo.png" width="400px">
</p>


## Sobre o projeto

<h3>Descrição</h3>

<p>O Estatik é uma plataforma desenvolvida como parte da disciplina de Estatística Aplicada, no curso de Análise e Desenvolvimento de Sistemas. Ela permite realizar diversos cálculos estatísticos de forma simples e intuitiva, incluindo:</p> 

<ul>
  
  <li><b>Parâmetros Estatísticos</b>
    <ul>
      <li>Agrupamento Discreto</li>
      <li>Agrupamento em Classes</li>
    </ul>
  </li>
  
  <li><b>Probabilidade </b>
    <ul>
      <li>Variáveis Aleatórias Contínuas - VAC </li>
      <li>Variáveis Aleatórias Discretas - VAD</li>
    </ul>
  </li>
  
  <li><b>Regressão Linear </b>
    <ul>
    <li>Equação de 1º grau</li>
    </ul>
  </li>

<br>
A plataforma foi pensada para estudantes e profissionais que desejam acessar cálculos estatísticos rapidamente por meio de uma interface minimalista e amigável.</li>
</ul>

<h4>Este trabalho foi feito por:</h4>
<ul>
  <li>Arthur Gimenez Oliveira</li>
  <li>Marcela Aringoli</li>
  <li>Natália Araújo da Silveira</li>
  <li>Thamires Marques Alves</li>
</ul>



<h4>Com o Orientador: João Carlos dos Santos</h4>


## Tecnologias utilizadas
- HTML5  
- CSS3  
- JavaScript  
- Bootstrap 5  



## Como executar
1. Baixe ou clone este repositório.  
2. Certifique-se de manter as pastas: `css`, `fonts`, `html`, `img` e `js`.  
3. Abra o arquivo `home.html` (localizado na pasta `html`) com o Live Server (ou diretamente no navegador).  


## Páginas

<h3>Home</h3>
<p>A Home da plataforma Estatik funciona como um painel de navegação, oferecendo acesso direto a todas os cálculos disponibilizados pelo sistema. </p>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="home" title="Site" src="projeto estatik prints/PRINT-HOME.png">
</p>






<h3>Parâmetros Estatísticos</h3>
<h4>Agrupamento Discreto</h4>
<p>O agrupamento discreto é utilizado quando os valores de uma variável já são números isolados (discretos) e não precisam ser organizados em classes ou intervalos.</p>

<p>Com o estatik, você pode calcular: </p>

<ul>
  <li>Média</li>
  <li>Mediana</li>
  <li>Moda</li>
  <li>Variância</li>
  <li>Desvio Padrão</li>
  <li>Coeficiente de variação</li>
</ul>

<p><b>Você pode fazer isso através de 2 tipos de entradas:</b></p>
<ul>
  <li>Dados listados (tendo a opção de ordenar os dados em ordem crescente para melhor visualização)</li>
  <li>Tabela (que calcula automaticamente a Frequência Acumulada)</li>
</ul>

<p>Print da tela do agrupamento discreto:</p>


<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Agrupamento Discreto" title="Site" src="projeto estatik prints/agr-disc.png">
</p>



<h4>Agrupamento em Classes </h4>
<p>O agrupamento em classes é utilizado quando se trabalha com muitos valores numéricos ou quando os dados são contínuos. Em vez de analisar cada número isoladamente, organizamos os dados em intervalos (classes), o que facilita a visualização e interpretação das informações.</p>

<p>Com o estatik, você pode calcular: </p>

<ul>
  <li>Média</li>
  <li>Mediana</li>
  <li>Moda Bruta</li>
  <li>Moda Czuber</li>
  <li>Variância</li>
  <li>Desvio Padrão</li>
  <li>Coeficiente de variação</li>
</ul>


<p>Print da tela do agrupamento em Classes:</p>


<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Agrupamento em Classes" title="Site" src="projeto estatik prints/agr-class.png">
</p>




<h3>Probabilidade</h3>
<h4>VAC - Variáveis Aleatórias Contínuas </h4>


<p>As Variáveis Aleatórias Contínuas (VAC) representam fenômenos cujos valores podem assumir qualquer número dentro de um intervalo real.</p>

<p>Com o estatik, pode-se calcular a VAC pelas distribuições:</p>

<ul>
<li>Distribuição Normal</li>
<li>Distribuição Uniforme</li>
<li>Distribuição Exponencial</li>
</ul>

<h6>Distribuição Normal</h6>
<p>A distribução normal calcula:</p>
<ul>
  <li>Média (automaticamente)</li>
  <li>Desvio Padrão (automaticamente)</li>
  <li>Tamanho da Amostra (automaticamente)</li>
  <li>Probabilidade Normal</li>
</ul>

<p>As entradas de dados na distribuição Normal podem ser: </p>
<ul>
  <li>Listagem de dados</li>
  <li>Tabela de Frequência individual - Agrupamento discreto </li>
  <li>Tabela de Frequência individual - Agrupamento em Classes</li>
</ul>


<h6>Distribuição Uniforme</h6>
<p>A distribuição Uniforme calcula: </p>
<ul>
  <li>Média</li>
  <li>Variância</li>
  <li>Desvio Padrão</li>
  <li>Coeficiente de variação</li>
  <li>Probabilidade</li>
</ul>


<h6>Distribuição Exponencial</h6>
<p>A distribuição exponencial calcula:</p>
<ul>
  <li>Probabilidade Exponencial</li>
</ul>

<p>Print de exemplo da tela VAC (distribuição exponencial):</p>


<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="VAC - Exponencial" title="Site" src="projeto estatik prints/vac-ex.png">
</p>



<h4>Variáveis Aleatórias Discretas </h4>
<p>As Variáveis Aleatórias Discretas (VAD) representam fenômenos cujos valores possíveis são isolados, (geralmente números inteiros).
Cada valor possui uma probabilidade específica associada.</p>

<p>Com o estatik, pode-se calcular a VAD pelas distribuições:</p>
<ul>
  <li>Distribuição Binomial</li>
  <li>Distribuição de Poisson</li>
</ul>

<h6>Distribuição Binomial</h6>
<p>A distribuição Binomial calcula:</p>
<ul>
  <li>Média</li>
  <li>Variância</li>
  <li>Desvio Padrão</li>
  <li>Coeficiente de variação</li>
  <li>Probabilidade</li>
</ul>


<h6>Distribuição de Poisson</h6>
<p>A Distribuição de Possion calcula: </p>
<ul>
  <li>Desvio Padrão</li>
  <li>Coeficiente de variação</li>
  <li>Probabilidade</li>
</ul>


<p>Print de exemplo da tela VAD (distribuição Binomial):</p>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="VAD - Binomial " title="Site" src="projeto estatik prints/vad-ex.png">
</p>


<h3>Regressão Linear</h3>
<h4>Equação de 1º grau</h4>
<p>Na regressão linear simples, busca-se ajustar uma equação de 1º grau que represente a relação entre duas variáveis, sendo uma independente (x) e uma dependente (y).</p>


<p>Print da tela de Equação de 1º Grau:</p>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Equação do 1º Grau" title="Site" src="projeto estatik prints/eq1g.png">
</p>







