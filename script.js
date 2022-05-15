const tamanhoTabuleiro = 10;
function criacaoTabuleiro() {
  const miniCont = document.querySelector(".miniCont");

  let divDasLinhas;
  function criacaoDaLinha(divDasLinhas) {
    divDasLinhas = document.createElement("div");
    divDasLinhas.classList.add("linha");
    miniCont.appendChild(divDasLinhas);
  }
  function criacaoDaCelula(divDasCelulas) {
    linhas.forEach((i) => {
      divDasCelulas = document.createElement("div");
      divDasCelulas.classList.add("celula");
      i.appendChild(divDasCelulas);
    });
  }
  for (i = 0; i < tamanhoTabuleiro; i++) {
    criacaoDaLinha(divDasLinhas);
  }

  const linhas = document.querySelectorAll(".linha");
  let divDasCelulas;
  for (i = 0; i < tamanhoTabuleiro; i++) {
    criacaoDaCelula(divDasCelulas);
  }
}
criacaoTabuleiro();
const celulas = document.querySelectorAll(".celula");
const tabuleiroEmFormaDeArray = [...celulas];
const tabuleiroEmFormaDeMatriz = [];

const raizQuadradaDoTabuleiro = Math.sqrt(tabuleiroEmFormaDeArray.length);

function ConverteArrayEmMatriz() {
  function verificaSeEMatriz(index) {
    if (!Array.isArray(tabuleiroEmFormaDeMatriz[index])) {
      tabuleiroEmFormaDeMatriz[index] = [];
    }
  }
  let contador = 0;
  for (let i = 0; i < raizQuadradaDoTabuleiro; i++) {
    for (let j = 0; j < raizQuadradaDoTabuleiro; j++) {
      verificaSeEMatriz(i);
      tabuleiroEmFormaDeMatriz[i][j] = tabuleiroEmFormaDeArray[contador];
      contador++;
    }
  }
}
ConverteArrayEmMatriz();
function criarRisco() {
  let risco = document.createElement("div");
  return risco;
}
function addItemNaDom(item, risco) {
  item.appendChild(risco);
  item.style.position = "relative";
  elementoPaiDoTabuleiro.removeEventListener("click", onClick);
}
const teste = document.querySelector(".linha");
console.log(teste.style.width);
function tamanhoDoRisco(risco) {
  risco.style.width = (40 * raizQuadradaDoTabuleiro).toString() + "px";
}
function tamanhoDoRiscoDiagonais(risco) {
  risco.style.width = (tamanhoTabuleiro * 40 * Math.sqrt(2)).toString() + "px";
  console.log(Math.sqrt(2));
}

function ganhouH(item) {
  let risco = criarRisco();
  addItemNaDom(item, risco);
  setTimeout(tamanhoDoRisco, 10, risco);
  risco.classList.add("riscoH", "risco");
}
function ganhouV(item) {
  let risco = criarRisco();
  addItemNaDom(item, risco);
  setTimeout(tamanhoDoRisco, 10, risco);
  risco.classList.add("riscoV", "risco");
}
function ganhouDP(item) {
  let risco = criarRisco();
  addItemNaDom(item, risco);
  setTimeout(tamanhoDoRiscoDiagonais, 10, risco);
  risco.classList.add("riscoDP", "risco");
}
function ganhouDS(item) {
  let risco = criarRisco();
  addItemNaDom(item, risco);
  setTimeout(tamanhoDoRiscoDiagonais, 10, risco);
  risco.classList.add("riscoDS", "risco");
}

let comparadorDeMarcacaoDeCampo = 0;
function onClick(itemClasse) {
  function verificaCliqueNaCelula() {
    if (!itemClasse.target.classList.contains("celula")) {
      return true;
    }
    return false;
  }
  if (verificaCliqueNaCelula()) {
    return;
  }
  function adicionaElemento() {
    if (
      itemClasse.target.innerText != "X" &&
      itemClasse.target.innerText != "O"
    ) {
      if (comparadorDeMarcacaoDeCampo % 2 == 0) {
        itemClasse.target.innerText = "X";
      } else {
        itemClasse.target.innerText = "O";
      }
      ++comparadorDeMarcacaoDeCampo;
    }
  }
  adicionaElemento();
  function verificaItensDasLinhas(arrayDeArmazenamento, linhaASerVerificada) {
    if (arrayDeArmazenamento.every((x) => x === itemClasse.target.innerText)) {
      ganhouH(linhaASerVerificada);
    }
  }
  function verificaItensDasColunas(arrayDeArmazenamento, colunaASerVerificada) {
    if (arrayDeArmazenamento.every((x) => x === itemClasse.target.innerText)) {
      ganhouV(colunaASerVerificada);
    }
  }
  function verificaItensDaDiagonalPrincipal(
    arrayDeArmazenamento,
    diagonalASerVerificada
  ) {
    if (arrayDeArmazenamento.every((x) => x === itemClasse.target.innerText)) {
      ganhouDP(diagonalASerVerificada);
    }
  }
  function verificaItensDaDiagonalSecundaria(
    arrayDeArmazenamento,
    diagonalASerVerificada
  ) {
    if (arrayDeArmazenamento.every((x) => x === itemClasse.target.innerText)) {
      ganhouDS(diagonalASerVerificada);
    }
  }
  function verificaSeGanhouLinhaColuna() {
    for (let i = 0; i < tabuleiroEmFormaDeMatriz.length; i++) {
      let arrayDeArmazenamentoLogicaVencedorLinha = [];
      let arrayDeArmazenamentoLogicaVencedorColuna = [];
      for (let j = 0; j < tabuleiroEmFormaDeMatriz.length; j++) {
        arrayDeArmazenamentoLogicaVencedorLinha[j] =
          tabuleiroEmFormaDeMatriz[i][j].innerText;
        arrayDeArmazenamentoLogicaVencedorColuna[j] =
          tabuleiroEmFormaDeMatriz[j][i].innerText;

        if (j === tabuleiroEmFormaDeMatriz.length - 1) {
          verificaItensDasLinhas(
            arrayDeArmazenamentoLogicaVencedorLinha,
            tabuleiroEmFormaDeMatriz[i][0]
          );
          verificaItensDasColunas(
            arrayDeArmazenamentoLogicaVencedorColuna,
            tabuleiroEmFormaDeMatriz[0][i]
          );
        }
      }
    }
  }
  verificaSeGanhouLinhaColuna();

  function verificaSeGanhouDiagonais() {
    const diagonalPrincipal = [];
    const diagonalSecundaria = [];
    contador = 0;
    function pegarElementosDaDiagonalPrincipal() {
      for (let m = 0; m < tabuleiroEmFormaDeMatriz.length; m++) {
        for (let n = 0; n < tabuleiroEmFormaDeMatriz.length; n++) {
          if (m == n) {
            diagonalPrincipal[contador] =
              tabuleiroEmFormaDeMatriz[m][n].innerText;
            contador++;
          }
        }
      }
    }
    pegarElementosDaDiagonalPrincipal();
    contador = 0;
    function pegarElementosDaDiagonalSecundaria() {
      let coluna = tabuleiroEmFormaDeMatriz.length - 1;
      for (let i = 0; i < tabuleiroEmFormaDeMatriz.length; i++) {
        diagonalSecundaria[contador] =
          tabuleiroEmFormaDeMatriz[i][coluna].innerText;
        contador++;
        --coluna;
      }
    }
    pegarElementosDaDiagonalSecundaria();
    verificaItensDaDiagonalPrincipal(
      diagonalPrincipal,
      tabuleiroEmFormaDeMatriz[0][0]
    );
    verificaItensDaDiagonalSecundaria(
      diagonalSecundaria,
      tabuleiroEmFormaDeMatriz[0][tabuleiroEmFormaDeMatriz.length - 1]
    );
  }
  verificaSeGanhouDiagonais();
}

const elementoPaiDoTabuleiro = document.querySelector(".miniCont");
function addOnClickNoElementoPai() {
  elementoPaiDoTabuleiro.addEventListener("click", onClick);
}
addOnClickNoElementoPai();
function reset() {
  function esvaziaElementosDoTabuleiro() {
    tabuleiroEmFormaDeArray.forEach((item) => {
      item.innerText = "";
    });
  }
  esvaziaElementosDoTabuleiro();
  function removeAsClassesDosElementos() {
    const linhas = document.querySelectorAll(".riscoH");
    const colunas = document.querySelectorAll(".riscoV");
    linhas.forEach((item) => {
      item.classList.remove("riscoH");
      item.classList.remove("ativo");
    });
    colunas.forEach((item) => {
      item.classList.remove("riscoV");
      item.classList.remove("ativo");
    });
  }
  function voltandoOMarcadorParaX() {
    comparadorDeMarcacaoDeCampo = 0;
  }
  voltandoOMarcadorParaX();
  removeAsClassesDosElementos();
  addOnClickNoElementoPai();
}
function addResetNoBotao() {
  const botao = document.querySelector(".botaoJgrDnv");
  botao.addEventListener("click", reset);
}
addResetNoBotao();
