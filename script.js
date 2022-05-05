const miniCont = document.querySelector(".miniCont");

miniCont.innerHTML =
  '<div class="linha"></div> <div class="linha"></div> <div class="linha"></div>';
const linha = document.querySelectorAll(".linha");

linha.forEach((item) => {
  item.innerHTML =
    '<div class="celula"></div><div class="celula"></div><div class="celula"></div>';
});

const a = document.querySelectorAll(".celula");
const Arr = [...a];
const Arr2 = [];

const w1 = [];

const x = Math.sqrt(Arr.length);

let cont = 0;
for (let i = 0; i < x; i++) {
  for (let j = 0; j < x; j++) {
    if (!Array.isArray(Arr2[i])) {
      Arr2[i] = [];
    }
    Arr2[i][j] = Arr[cont];
    cont++;
  }
}

function ganhou(item) {
  const vit = document.querySelector(".ganhou");
  const xo = document.querySelector(".XO");
  vit.style.display = "block";
  xo.innerText = item;
}

// console.log(x);

let j = 0;
function onClick(itemClasse) {
  if (!itemClasse.target.classList.contains("celula")) {
    return;
  }

  if (
    (itemClasse.target.innerText != "X") &
    (itemClasse.target.innerText != "O")
  ) {
    if (j % 2 == 0) {
      itemClasse.target.innerText = "X";
    } else {
      itemClasse.target.innerText = "O";
    }
    ++j;
  }

  for (let i = 0; i < Arr2.length; i++) {
    let t = [];
    let o = [];
    for (let j = 0; j < Arr2.length; j++) {
      t[j] = Arr2[i][j].innerText;
      o[j] = Arr2[j][i].innerText;

      if (j === Arr2.length - 1) {
        if (t.every((x) => x === "X")) {
          ganhou("X");
        } else if (t.every((x) => x === "O")) {
          ganhou("O");
        } else if (o.every((x) => x === "X")) {
          ganhou("X");
        } else if (o.every((x) => x === "O")) {
          ganhou("O");
        }
      }
    }
  }
  const diagP = [];
  const diagS = [];
  cont = 0;

  for (let m = 0; m < Arr2.length; m++) {
    for (let n = 0; n < Arr2.length; n++) {
      if (m == n) {
        diagP[cont] = Arr2[m][n].innerText;
        cont++;
      }
    }
  }

  cont = 0;
  let coluna = Arr2.length - 1;
  for (let i = 0; i < Arr2.length; i++) {
    diagS[cont] = Arr2[i][coluna].innerText;
    cont++;
    --coluna;
  }
  if (diagP.every((x) => x === "X")) {
    ganhou("X");
  } else if (diagP.every((x) => x === "O")) {
    ganhou("O");
  } else if (diagS.every((x) => x === "X")) {
    ganhou("X");
  } else if (diagS.every((x) => x === "O")) {
    ganhou("O");
  }
}

const pai = document.querySelector(".miniCont");
// console.log(pai);
pai.addEventListener("click", onClick);
// Arr.forEach((item) => {
//   item.addEventListener("click", onClick);
// });

function reset() {
  Arr.forEach((item) => {
    item.innerText = "";
  });
  const vit = document.querySelector(".ganhou");
  vit.style.display = "none";
  j = 0;
}
const botao = document.querySelectorAll(".botaoJgrDnv");
botao.forEach((item) => {
  item.addEventListener("click", reset);
});
// const botao = document.querySelectorAll(".botaoJgrDnv");
